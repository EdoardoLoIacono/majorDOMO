import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FavoriteDevicesService } from '../services/favourite.service';
import { IonicModule } from '@ionic/angular';
import { LuceComponent } from '../dispositivo/luce/luce.component';


@Component({
    selector: 'app-dispositivi',
    templateUrl: './dispositivi.page.html',
    styleUrls: ['./dispositivi.page.scss'],
    imports: [
        IonicModule,
        RouterLink,
        LuceComponent
    ],
})
export class DispositiviPage implements OnInit {
  filtro: string = 'luci';

  listaDispositivi = [
    {
      favourite: false,
      nome: 'LED1',
      stato: false,
      tipo: 0,
    },
    {
      favourite: false,
      nome: 'LED2',
      stato: true,
      tipo: 0,
    },
    {
      favourite: false,
      nome: 'Tapparella1',
      stato: true,
      tipo: 1,
    },
  ];

  dispositiviMostrati = this.listaDispositivi;

  constructor(
    private router: Router,
    private favouriteService: FavoriteDevicesService
  ) {}

  ngOnInit() {
    this.listaDispositivi = [...this.favouriteService.updateDevicesWithFavorites(this.listaDispositivi)];
  }

  goHome() {
    this.router.navigate(['home']);
  }

  async filtraDispositivi(event: any) {
    const filtro = event.detail.value;
  
    this.listaDispositivi = this.favouriteService.updateDevicesWithFavorites(this.listaDispositivi);
  
    if (filtro === 'tutti') {
      this.dispositiviMostrati = this.listaDispositivi;
    } else if (filtro === 'luci') {
      this.dispositiviMostrati = this.listaDispositivi.filter((d) => d.tipo === 0);
    } else if (filtro === 'tapparelle') {
      this.dispositiviMostrati = this.listaDispositivi.filter((d) => d.tipo === 1);
    } else if (filtro === 'preferiti') {
      this.showFavourites();
    }
  }

  showFavourites() {
    this.dispositiviMostrati = this.favouriteService.getFavoriteDevices();
  }

  
}