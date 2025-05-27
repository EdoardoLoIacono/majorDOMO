import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Html5Qrcode } from 'html5-qrcode';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [IonicModule],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showLogin = false;
  showScanner = false;
  scannedText: string | null = null;
  scannerActive = false;

  @ViewChild('scanner', { static: false }) scannerRef!: ElementRef;
  html5QrCode!: Html5Qrcode;

  constructor(
    private router: Router,
    private wsService: WebsocketService
  ) {}

  temp() {
    try {
      this.wsService.init();
      this.wsService.ws.onopen = () => {
        this.wsService.send(JSON.parse(`{"method":"first_login","user":"superuser","email":"mromagnoli73@gmail.com","uuid":"efae92d1c77586f4c49cce7fd3d1d6222b44e155101d2d9b5ec6f44bbcb0d8ccd87badc1a4185b2b16c0ffbab9dabe19763a1829d6eb3c1fcfa7cd6c058f63b0","created_at":"2025-03-26T11-23-35-998144","vpn":{},"utente":{"nodo":7,"Cognome":"Romagnoli","Nome":"Marcello","password":"pippo","Email":"mromagnoli73@gmail.com","AbilitatoAPP":{"stato":true},"tipo":"Utenti"}}`));

        this.wsService.ws.onmessage = event => {
          const data = JSON.parse(event.data);
          if (data.method === 'error') {
            this.router.navigate(['/login']);
            return;
          }
          if (data.method === 'connected') {
            localStorage.setItem('token', data.token);
            this.router.navigate(['/home']);
          }
        };
      };
    } catch (error) {
      console.error('Errore durante la scansione del QR code:', error);
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.showLogin = true;
      this.temp();
    }, 3000);
  }

  async openCamera() {
    this.showScanner = true;
    this.scannerActive = true;

    // Attendere che il DOM sia aggiornato prima di inizializzare lo scanner
    setTimeout(async () => {
      try {
        const hasCamera = await Html5Qrcode.getCameras();
        if (hasCamera && hasCamera.length > 0) {
          const cameraId = hasCamera[0].id;

          this.html5QrCode = new Html5Qrcode('reader');

          const config = {
            fps: 15,
            qrbox: { width: 250, height: 250 },
            aspectRatio: 1.0,
            disableFlip: false,
            videoConstraints: {
              facingMode: 'environment'
            }
          };

          this.html5QrCode.start(
            cameraId,
            config,
            decodedText => {
              console.log('QR Code scansionato:', decodedText);
              this.html5QrCode.stop();
              this.scannerActive = false;
              setTimeout(() => {
                this.stopScanner();
                try {
                  this.wsService.init();
                  this.wsService.ws.onopen = () => {
                    this.wsService.send(JSON.parse(decodedText));

                    this.wsService.ws.onmessage = event => {
                      const data = JSON.parse(event.data);
                      if (data.method === 'error') {
                        this.router.navigate(['/login']);
                        return;
                      }
                      if (data.method === 'connected') {
                        localStorage.setItem('token', data.token);
                        this.router.navigate(['/home']);
                      }
                    };
                  };
                } catch (error) {
                  console.error('Errore durante la scansione del QR code:', error);
                }
              }, 500);
            },
            error => {}
          );
        }
      } catch (err) {
        console.error('Errore di accesso alla fotocamera:', err);
      }
    }, 300);
  }

  stopScanner() {
    this.showScanner = false;
    if (this.html5QrCode && this.scannerActive) {
      this.html5QrCode
        .stop()
        .then(() => {
          this.html5QrCode.clear();
          this.scannerActive = false;
        })
        .catch(err => {
          console.error('Errore durante lo stop dello scanner:', err);
        });
    }
  }
}
