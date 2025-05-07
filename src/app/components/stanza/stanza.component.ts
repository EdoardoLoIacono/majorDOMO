import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-stanza',
  templateUrl: './stanza.component.html',
  imports: [IonicModule],
  styleUrls: ['./stanza.component.scss'],
})
export class StanzaComponent  implements OnInit {
  @Input() nome: string = '';
  @Input() nDispositivi: number = 0;
  @Input() dispositiviAttivi: number = 0;
  @Output() visualizzaDispositivi = new EventEmitter<string>();

onVisualizzaClick() {
  this.visualizzaDispositivi.emit(this.nome);
}

  constructor() { }

  ngOnInit() {}
  

}
