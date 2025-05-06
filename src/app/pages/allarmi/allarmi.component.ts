import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { AllarmeComponent } from 'src/app/shared/allarme/allarme.component';

@Component({
  selector: 'app-allarmi',
  templateUrl: './allarmi.component.html',
  styleUrls: ['./allarmi.component.scss'],
  imports: [IonicModule, RouterLink, RouterLinkActive,AllarmeComponent,CommonModule,FormsModule]
})
export class AllarmiComponent  implements OnInit {
  delay: number = 0;

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  saveDelay(){
    this.delayToast(`Delay impostato a ${this.delay} secondi`)
  }

  async delayToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }
}
