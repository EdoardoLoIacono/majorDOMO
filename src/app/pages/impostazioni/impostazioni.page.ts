import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonAvatar, IonicModule } from '@ionic/angular';
import { NavigationComponent } from 'src/app/shared/navigation/navigation.component';
import { MorphBackgroundComponent } from 'src/app/shared/morph-background/morph-background.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-impostazioni',
  templateUrl: './impostazioni.page.html',
  styleUrls: ['./impostazioni.page.scss'],
  standalone: true,
  imports: [FormsModule,IonicModule,NavigationComponent,MorphBackgroundComponent,RouterLink,RouterLinkActive]
})
export class ImpostazioniPage implements OnInit {

  constructor(private wsService: WebsocketService, private router: Router) { }

  ngOnInit() {
    // this.wsService.ws.onopen = () => {
    //       console.log('HERE')
          // localStorage.setItem('user-data', JSON.stringify());
    //       const data = localStorage.getItem('user-data');
    //       if(data === null) {
    //         this.router.navigate(['/login']);
    //         return;
    //       }
    //       this.wsService.send(JSON.parse(data));
    //     };
  }

}
