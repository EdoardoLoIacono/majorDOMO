import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteDevicesService } from 'src/app/services/favourite.service';

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
  @Input() favourite!: boolean;
  @Input() nome!: string ;
  @Input() stato!: boolean;

  @Output() favouriteChanged = new EventEmitter<void>();

  constructor(private favouriteDeviceService: FavouriteDevicesService) {}

  manageFavourite() {
    this.favourite = !this.favourite;

    if (this.favourite) {
      this.favouriteDeviceService.addFavorite(this.nome);
    } else {
      this.favouriteDeviceService.removeFavorite(this.nome);
    }

    this.favouriteChanged.emit();

  }
}