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

  constructor(
    private router: Router,
    private favouriteService: FavouriteDevicesService,
    public dispositiviService: DispositiviService
  ) {}

  ngOnInit() {
    this.dispositiviService.getDispositivi()
  }


  async filtraDispositivi(event: any) {
    const filtro = event.detail.value;

    if (filtro === 'tutti') {
      this.dispositiviService.getDispositivi();
    }
    else
    {
      this.dispositiviService.getDispositiviFiltrati(filtro);
    }
  
  }
  
}