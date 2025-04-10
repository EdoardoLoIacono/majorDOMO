import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { MorphBackgroundComponent } from 'src/app/shared/morph-background/morph-background.component';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
  standalone: true,
  imports: [FormsModule,IonicModule,NavigationComponent,MorphBackgroundComponent]
})
export class ImpostazioniPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
