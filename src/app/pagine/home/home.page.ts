import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { FavouriteDevicesService } from '../../services/favourite.service';
import { LuceComponent } from 'src/app/dispositivi/luce/luce.component';
import { TapparellaComponent } from 'src/app/dispositivi/tapparella/tapparella.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true, 
  imports: [IonicModule, LuceComponent, TapparellaComponent,RouterLink,RouterLinkActive],
})
export class HomePage implements OnInit {
  preferiti: any[] = [];

  constructor(private router: Router, private favouriteService: FavouriteDevicesService) {}

  categories = [
    { name: 'Dispositivi', img: 'lampadina', route: 'dispositivi' },
    { name: 'Stanze', img: 'porta', route: '' },
    { name: 'Pulsanti virtuali', img: 'pulsanti', route: 'pulsantiVirtuali' },
    { name: 'Clima', img: 'clima', route: '' },
    { name: 'Allarmi', img: 'allarmi', route: '' },
    { name: 'Funzioni', img: 'funzioni', route: '' },
    { name: 'Videocitofono', img: 'telecamere', route: '' },
    { name: 'Telecamere', img: 'telecamere', route: '' },
  ];

  ngOnInit(): void {
    this.preferiti = this.favouriteService.getFavoriteDevices().slice(0, 2);
    console.log(this.preferiti);
  }
}