import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoriteDevicesService } from 'src/app/services/favourite.service';

@Component({
    selector: 'app-luce',
    templateUrl: './luce.component.html',
    styleUrls: ['./luce.component.scss'],
    imports: [
      IonicModule,
      FormsModule
    ],
})
export class LuceComponent {
  @Input() favourite: boolean = false;
  @Input() nome: string = '';
  @Input() stato: boolean = false;


  constructor(private favouriteDeviceService: FavoriteDevicesService) {}

  manageFavourite() {
    this.favourite = !this.favourite;

    if (this.favourite) {
      this.favouriteDeviceService.addFavorite(this.nome);
    } else {
      this.favouriteDeviceService.removeFavorite(this.nome);
    }

  }
}