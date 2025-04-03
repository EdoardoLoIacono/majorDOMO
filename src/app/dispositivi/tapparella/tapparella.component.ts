import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavouriteDevicesService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-tapparella',
  templateUrl: './tapparella.component.html',
  styleUrls: ['./tapparella.component.scss'],
  imports: [IonicModule]
})
export class TapparellaComponent  implements OnInit {
  @Input() favourite!: boolean;
  @Input() nome!: string ;
  @Input() stato!: boolean;
  percentage: number = 0;

  constructor(private favouriteDeviceService: FavouriteDevicesService) {}

  manageFavourite() {
    this.favourite = !this.favourite;

    if (this.favourite) {
      this.favouriteDeviceService.addFavorite(this.nome);
    } else {
      this.favouriteDeviceService.removeFavorite(this.nome);
    }

  }

  changePercentage(event: any) {
    this.percentage = event.detail.value;
  }

  ngOnInit() {}

}
