import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-telecamere',
  templateUrl: './telecamere.component.html',
  styleUrls: ['./telecamere.component.scss'],
  imports: [IonicModule,RouterLink]
})
export class TelecamereComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
