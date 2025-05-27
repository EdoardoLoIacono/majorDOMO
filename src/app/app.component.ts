import { CommonModule, ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, CommonModule]
})
export class AppComponent {
  constructor(
    private wsService: WebsocketService,
    private router: Router
  ) {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/login']);
      return;
    }
    console.log('HERE');
    this.wsService.init();
    this.wsService.ws.onopen = () => {
      this.wsService.send({
        method: 'read_state',
        folder: 'mromagnoli73@gmail.com-2025-03-26T11-23-35-998144',
        token: token
      });

      this.wsService.ws.onmessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data);
        if (data.method === 'error') {
          this.router.navigate(['/login']);
          return;
        }
      };
    };
  }
}
