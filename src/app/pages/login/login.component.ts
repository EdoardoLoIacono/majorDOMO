import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Html5Qrcode } from 'html5-qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports:[IonicModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLogin = false;
  showScanner = false;
  scannedText: string | null = null;
  scannerActive = false;

  @ViewChild('scanner', { static: false }) scannerRef!: ElementRef;
  html5QrCode!: Html5Qrcode;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showLogin = true;
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
              facingMode: "environment" 
            }
          };
          
          this.html5QrCode.start(
            cameraId,
            config,
            (decodedText) => {
              console.log('QR Code scansionato:', decodedText);
              this.html5QrCode.stop();
              this.scannerActive = false;
              setTimeout(() => {
                this.stopScanner();
                if(decodedText == "Ciao mondo"){
                  this.router.navigate(['/home']);
                }
                else{
                  alert("QR code non valido")
                  this.router.navigate(['/login']);
                }
              }, 500);
            },
            (error) => {
            }
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
      this.html5QrCode.stop().then(() => {
        this.html5QrCode.clear();
        this.scannerActive = false;
      }).catch(err => {
        console.error("Errore durante lo stop dello scanner:", err);
      });
    }
  }
}