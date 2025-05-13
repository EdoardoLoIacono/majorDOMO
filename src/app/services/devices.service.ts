import { Injectable, OnDestroy } from '@angular/core';
import { Device } from '../models/device';
import { filter, retry, Subscription } from 'rxjs';
import { WebsocketService } from './websocket.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  public devicesState: { [key: string]: Device[] } = {};
  private wsSub?: Subscription;
  private token: string = '';

  constructor(private wsService: WebsocketService) {
    this.initialize();
  }

  private initialize() {
    this.wsService.ws.onopen = () => {
      this.wsService.send({
        method: 'first_login',
        user: 'superuser',
        email: 'mromagnoli73@gmail.com',
        uuid: 'efae92d1c77586f4c49cce7fd3d1d6222b44e155101d2d9b5ec6f44bbcb0d8ccd87badc1a4185b2b16c0ffbab9dabe19763a1829d6eb3c1fcfa7cd6c058f63b0',
        created_at: '2025-03-26T11-23-35-998144',
        vpn: {},
        utente: {
          nodo: 7,
          Cognome: 'Romagnoli',
          Nome: 'Marcello',
          password: 'pippo',
          Email: 'mromagnoli73@gmail.com',
          'Abilitato APP': {
            stato: true,
          },
          tipo: 'Utenti',
        },
      });
    };

    this.wsService.ws.onmessage = (event: MessageEvent) => {
      console.log(typeof event.data, event.data);
      let data;
      try {
        data = JSON.parse(event.data);
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        console.log(data);
      } catch (e) {
        console.error('Errore di parsing:', e);
      }

      console.log(typeof data, data);

      switch (data.method) {
        case 'connected':
          this.token = data.token;
          break;
        case 'register_peer':
          this.wsService.send({
            method: 'read_state',
            folder: 'mromagnoli73@gmail.com-2025-03-26T11-23-35-998144',
            token: this.token,
          });
          break;
        case 'get_state':
          this.devicesState = data.data.STANZE;
          break;
      }
    };
  }

  public getDevicesByRoom(room: string = '',type: number = -1): { [key: string]: Device[] } | Device[] {
    if (room === '') {
      const filteredState: { [key: string]: Device[] } = JSON.parse(JSON.stringify(this.devicesState));
      for (const room in this.devicesState) {
        if (this.devicesState.hasOwnProperty(room)) {
          filteredState[room] = this.devicesState[room].filter(device => device.tipo === type || type === -1);
        }
      }
      return filteredState;
    }
    return this.devicesState[room].filter((e) => {console.log(e);return e.tipo === type || type === -1}) || [];
  }

  public getDevices(): any {
    return this.devicesState;
  }
}
