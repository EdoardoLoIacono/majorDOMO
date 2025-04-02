import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { LuceComponent } from '../dispositivo/luce/luce.component';
import { FavoriteDevicesService } from '../services/favourite.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    imports: [IonicModule, NgFor, LuceComponent],
})
export class HomePage implements OnInit{

  preferiti: any[] = [];

  constructor(private router: Router, private favouriteService: FavoriteDevicesService){}

  categories = [
    { name: 'Dispositivi', img: 'lampadina',route:'dispositivi' },
    { name: 'Stanze', img: 'porta',route:'' },
    { name: 'Pulsanti virtuali', img: 'pulsanti',route:'' },
    { name: 'Clima', img: 'clima',route:'' },
    { name: 'Allarmi', img: 'allarmi',route:'' },
    { name: 'Funzioni', img: 'funzioni',route:'' },
    { name: 'Videocitofono', img: 'telecamere',route:'' },
    { name: 'Telecamere', img: 'telecamere',route:'' }
  ];

  ngOnInit(): void {
    this.preferiti = this.favouriteService.getFavoriteDevices().slice(0,2)
  }

  goToCategory(category: any){
    if(category.route){
      this.router.navigate([category.route])
    }
  }

  goHome(){
    this.router.navigate(['home'])
  }

}
