import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pulsanti-virtuali',
  templateUrl: './pulsanti-virtuali.component.html',
  styleUrls: ['./pulsanti-virtuali.component.scss'],
  imports: [IonicModule,RouterLink,RouterLinkActive]
})
export class PulsantiVirtualiComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
