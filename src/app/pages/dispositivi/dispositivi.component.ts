import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FavouriteDevicesService } from '../../services/favourite.service';
import { IonicModule } from '@ionic/angular';
import { LuceComponent } from 'src/app/shared/luce/luce.component';
import { TapparellaComponent } from 'src/app/shared/tapparella/tapparella.component';
import { DispositiviService } from 'src/app/services/dispositivi.service';
import { DevicesService } from 'src/app/services/devices.service';
import { KeyValuePipe } from '@angular/common';


@Component({
    selector: 'app-dispositivi',
    templateUrl: './dispositivi.component.html',
    styleUrls: ['./dispositivi.component.scss'],
    imports: [
        IonicModule,
        RouterLink,
        LuceComponent,
        TapparellaComponent,
        KeyValuePipe
    ],
})
export class DispositiviPage implements OnInit, AfterViewInit {


  filtro: string = 'luci';
  rooms: any;
  openRooms: any;

  constructor(
    private router: Router,
    private favouriteService: FavouriteDevicesService,
    public dispositiviService: DispositiviService,
    public devicesService: DevicesService,
  ) {}
  ngAfterViewInit(): void {
  }
  
  ngOnInit() {
    setTimeout(() => {
      const t = this.devicesService.getDevicesByRoom();
    this.rooms = t;
      
    }, 2500);
  }

  async filtraDispositivi(event: any) {
    const filtro = event.detail.value;

    if (filtro === 'tutto') {
      this.rooms = this.devicesService.getDevicesByRoom();
    }
    else if(filtro === 'luci') {
      this.rooms = this.devicesService.getDevicesByRoom('', 0);
    }
    else if(filtro === 'tapparelle') {
      {
        this.rooms = this.devicesService.getDevicesByRoom('', 1);
    }
  
    }
  }
  
}