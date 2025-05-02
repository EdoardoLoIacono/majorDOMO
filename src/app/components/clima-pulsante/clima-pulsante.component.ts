import { CommonModule, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-clima-pulsante',
  templateUrl: './clima-pulsante.component.html',
  imports: [IonicModule,FormsModule,NgClass,CommonModule],
  styleUrls: ['./clima-pulsante.component.scss'],
})
export class ClimaPulsanteComponent  implements OnInit {
  @Input() stanza: string = "Prova";
  @Input() attivo: boolean = false;
  @Input() temperatura: number = 10.2;

  mostraTimer: boolean = false;
  oraSelezionata: number = 0;
  minutiSelezionati: number = 0;
  timerAttivo: boolean = false;
  fineTimer: any = null;
  accensioneTimer: string = "";


  hours: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];


  minutes: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

  constructor() { }

  ngOnInit() {
    console.log(this.temperatura)
  }

  gestisciStato() {
    this.attivo = !this.attivo;
    
    if (!this.attivo) {
      this.timerAttivo = false;
      this.fineTimer = null;
      this.accensioneTimer = "";
    }
  }
  
  apriTemporizzatore() {
    this.mostraTimer = true;
    this.oraSelezionata = 0;
    this.minutiSelezionati = 30;
  }

  chiudiTemporizzatore(){
    this.mostraTimer = false;
  }
  
  impostaTimer() {
    const now = new Date();
    const endTime = new Date(now.getTime() + (this.oraSelezionata * 60 * 60 * 1000) + (this.minutiSelezionati * 60 * 1000));
    
    if (this.oraSelezionata === 0 && this.minutiSelezionati === 0) {
      this.minutiSelezionati = 30;
      endTime.setTime(now.getTime() + (30 * 60 * 1000));
    }
    
    this.timerAttivo = true;
    this.fineTimer = endTime;
    this.attivo = true;
    this.mostraTimer = false;
  
    const ore = this.fineTimer.getHours();
    const minuti = this.fineTimer.getMinutes();
    const minutiFormattati = minuti < 10 ? `0${minuti}` : minuti;
  
    this.accensioneTimer = `${ore}:${minutiFormattati}`;
    
  }


}
