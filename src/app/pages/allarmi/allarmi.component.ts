import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AllarmeComponent } from 'src/app/shared/allarme/allarme.component';

@Component({
  selector: 'app-allarmi',
  templateUrl: './allarmi.component.html',
  styleUrls: ['./allarmi.component.scss'],
  imports: [IonicModule, RouterLink, RouterLinkActive,AllarmeComponent]
})
export class AllarmiComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
