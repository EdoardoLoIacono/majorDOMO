import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-allarme',
  templateUrl: './allarme.component.html',
  styleUrls: ['./allarme.component.scss'],
  imports: [IonicModule,NgStyle]
})
export class AllarmeComponent  implements OnInit {

  titolo = 'Ingresso principale';
  stato = false;

  constructor(private toastController: ToastController){}

  onOff() {
    if (this.stato) {
      this.stato = false;
      console.log('Disattivazione inviata!');
    }
    else{
      this.stato = true;
      console.log('Attivazione inviata!');
      this.presentToast();

    }
  }

  async presentToast(action: string = 'attivato') {
    const toast = await this.toastController.create({
      message: `Allarme ${this.titolo} ${action}`,
      duration: 2000,
      position: 'bottom',
      cssClass: 'allarme-toast',
      color: action === 'attivato' ? 'danger' : 'medium'
    });
    await toast.present();
  }

  ngOnInit() {}

}
