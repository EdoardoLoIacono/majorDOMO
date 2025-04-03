import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FavouriteDevicesService } from '../../services/favourite.service';
import { IonicModule } from '@ionic/angular';
import { LuceComponent } from 'src/app/dispositivi/luce/luce.component';
import { TapparellaComponent } from 'src/app/dispositivi/tapparella/tapparella.component';


@Component({
    selector: 'app-dispositivi',
    templateUrl: './dispositivi.component.html',
    styleUrls: ['./dispositivi.component.scss'],
    imports: [
        IonicModule,
        RouterLink,
        LuceComponent,
        TapparellaComponent
    ],
})
export class DispositiviPage implements OnInit {
  filtro: string = 'luci';

  listaDispositiviOriginale = [
    {
      favourite: false,
      nome: 'Led1',
      stato: false,
      tipo: 0,
    },
    {
      favourite: false,
      nome: 'Led2',
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

  listaDispositivi = [...this.listaDispositiviOriginale];

  constructor(
    private router: Router,
    private favouriteService: FavouriteDevicesService
  ) {}

  ngOnInit() {
    this.listaDispositivi = this.favouriteService.updateDevicesWithFavorites(
      this.listaDispositiviOriginale
    );
  }

  goHome() {
    this.router.navigate(['home']);
  }

  async filtraDispositivi(event: any) {
    const filtro = event.detail.value;

    const dispositiviAggiornati = this.favouriteService.updateDevicesWithFavorites(
      this.listaDispositiviOriginale
    );

    if (filtro === 'tutti') {
      this.listaDispositivi = [...dispositiviAggiornati];
    } else if (filtro === 'luci') {
      this.listaDispositivi = dispositiviAggiornati.filter((d) => d.tipo === 0);
    } else if (filtro === 'tapparelle') {
      this.listaDispositivi = dispositiviAggiornati.filter((d) => d.tipo === 1);
    } else if (filtro === 'preferiti') {
      this.listaDispositivi = dispositiviAggiornati.filter((d) => d.favourite);
    }
  }
  
}