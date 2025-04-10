import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LuceComponent } from 'src/app/shared/luce/luce.component';
import { TapparellaComponent } from 'src/app/shared/tapparella/tapparella.component';

@Component({
  selector: 'app-stanze',
  templateUrl: './stanze.component.html',
  styleUrls: ['./stanze.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, RouterLinkActive, LuceComponent, TapparellaComponent]
})
export class StanzeComponent implements OnInit {
  listaStanze: any =[] ;

  constructor() { }

  ngOnInit() {
    this.listaStanze = [
      {
        id: 'soggiorno',
        nome: 'Soggiorno',
        expanded: false,
        dispositivi: [
          { id: 1, nome: 'Luce principale', tipo: 0, stato: 0, favourite: true },
          { id: 2, nome: 'Luce divano', tipo: 0, stato: 1, favourite: false },
          { id: 3, nome: 'Tapparella est', tipo: 1, stato: 0, favourite: false }
        ]
      },
      {
        id: 'cucina',
        nome: 'Cucina',
        icona: 'restaurant-outline',
        tipo: 'giorno',
        expanded: false,
        dispositivi: [
          { id: 4, nome: 'Luce soffitto', tipo: 0, stato: 1, favourite: false },
          { id: 5, nome: 'Luce banco', tipo: 0, stato: 0, favourite: true }
        ]
      },
      {
        id: 'camera',
        nome: 'Camera da letto',
        icona: 'bed-outline',
        tipo: 'notte',
        expanded: false,
        dispositivi: [
          { id: 6, nome: 'Luce centrale', tipo: 0, stato: 0, favourite: false },
          { id: 7, nome: 'Tapparella', tipo: 1, stato: 1, favourite: true }
        ]
      },
      {
        id: 'bagno',
        nome: 'Bagno',
        icona: 'water-outline',
        tipo: 'notte',
        expanded: false,
        dispositivi: [
          { id: 8, nome: 'Luce specchio', tipo: 0, stato: 0, favourite: false }
        ]
      }
    ];
    
  }


  toggleStanza(stanza: any) {
    stanza.expanded = !stanza.expanded;
  }


}