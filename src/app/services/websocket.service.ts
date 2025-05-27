import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Observer, timer, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  public ws!: WebSocket;

  constructor() {
    this.init();
  }

  init() {
    this.ws = new WebSocket(environment.webSocketUrl);

    this.ws.onopen = () => {
      console.log('WebSocket connesso');
    };

    this.ws.onmessage = (event: MessageEvent) => {
      console.log('Messaggio ricevuto:', JSON.parse(event.data));
    };

    this.ws.onerror = (event: Event) => {
      console.error('Errore WebSocket:', event);
    };

    this.ws.onclose = (event: CloseEvent) => {
      console.log('Websocket disconnesso');
    };
  }

  /**
   * Sends data to the WebSocket server.
   *
   * This method serializes the provided data object into a JSON string
   * and sends it through the WebSocket connection.
   *
   * @param data - The data object to be sent to the server. It will be
   *               converted to a JSON string before transmission.
   *
   * @throws Will throw an error if the WebSocket connection (`this.ws`) is not open.
   */
  public send(data: Object): void {
    this.ws.send(JSON.stringify(data));
    console.warn(data);
  }
}
