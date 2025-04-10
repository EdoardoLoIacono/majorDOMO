import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pulsante-virtuale',
  templateUrl: './pulsante-virtuale.component.html',
  styleUrls: ['./pulsante-virtuale.component.scss'],
  imports: [IonicModule]
})
export class PulsanteVirtualeComponent  implements OnInit {

  titolo?: string = 'Buongiorno'
  nDispositivi?: number = 2

  constructor() { }

  ngOnInit() {}

}
