import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClimaPulsanteComponent } from 'src/app/components/clima-pulsante/clima-pulsante.component';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  imports: [IonicModule,RouterLink,RouterLinkActive,ClimaPulsanteComponent],
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
