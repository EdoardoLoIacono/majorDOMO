import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { FavouriteDevicesService } from '../../services/favourite.service';
import { LuceComponent } from 'src/app/shared/luce/luce.component';
import { TapparellaComponent } from 'src/app/shared/tapparella/tapparella.component';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { MorphBackgroundComponent } from 'src/app/shared/morph-background/morph-background.component';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    LuceComponent,
    TapparellaComponent,
    RouterLink,
    RouterLinkActive,
    NavigationComponent,
    MorphBackgroundComponent,
  ],
})
export class HomePage implements OnInit {
  preferiti: any[] = [];

  constructor(
    private router: Router,
    private favouriteService: FavouriteDevicesService,
    private devicesService: DevicesService
  ) {}

  categories = [
    { name: 'Dispositivi', img: 'lampadina', route: 'dispositivi' },
    { name: 'Stanze', img: 'porta', route: 'stanze' },
    { name: 'Pulsanti virtuali', img: 'pulsanti', route: 'pulsantiVirtuali' },
    { name: 'Clima', img: 'clima', route: 'clima' },
    { name: 'Allarmi', img: 'allarmi', route: 'allarmi' },
    { name: 'Videocitofono', img: 'citofono', route: 'videocitofono' },
    { name: 'Telecamere', img: 'telecamere', route: 'telecamere' },
  ];

  ngOnInit(): void {
    this.preferiti = this.favouriteService.getFavoriteDevices().slice(0, 2);
    console.log(this.preferiti);
  }
}
