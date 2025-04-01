import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-luce',
  templateUrl: './luce.component.html',
  styleUrls: ['./luce.component.scss'],
  standalone:false
})
export class LuceComponent  implements OnInit {

  @Input() favourite:boolean = false;
  @Input() nome:string = "";
  @Input() stato:boolean = false;

  @Output() aggiungiPreferito = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {}

  preferito(){
    this.favourite = !this.favourite
    this.aggiungiPreferito.emit(true)

  }

}
