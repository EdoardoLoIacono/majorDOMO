import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-videocitofono',
  templateUrl: './videocitofono.component.html',
  styleUrls: ['./videocitofono.component.scss'],
  imports: [IonicModule,RouterLink,RouterLinkActive]
})
export class VideocitofonoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
