import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FavouriteDevicesService } from '../../services/favourite.service';
import { IonicModule } from '@ionic/angular';
import { LuceComponent } from 'src/app/shared/luce/luce.component';
import { TapparellaComponent } from 'src/app/shared/tapparella/tapparella.component';
import { DispositiviService } from 'src/app/services/dispositivi.service';


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
    private favouriteService: FavouriteDevicesService,
    public dispositiviService: DispositiviService
  ) {}

  ngOnInit() {
    this.dispositiviService.getDispositivi()
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
      this.dispositiviService.getDispositivi();
    }
    else
    {
      this.dispositiviService.getDispositiviFiltrati(filtro);
    }
  
  }
  
}