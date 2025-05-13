import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonContent, IonicModule } from '@ionic/angular';
import { StanzaComponent } from 'src/app/components/stanza/stanza.component';
import { StanzeService } from 'src/app/services/stanze.service';

@Component({
  selector: 'app-stanze',
  templateUrl: './stanze.component.html',
  imports: [IonicModule,RouterLink,RouterLinkActive,StanzaComponent],
  styleUrls: ['./stanze.component.scss'],
})
export class StanzeComponent  implements OnInit {

  constructor(public stanzeService: StanzeService) { }

  ngOnInit() {
    this.stanzeService.getStanze()
  }

}
