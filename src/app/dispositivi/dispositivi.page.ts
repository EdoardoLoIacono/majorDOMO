import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dispositivi',
  templateUrl: './dispositivi.page.html',
  styleUrls: ['./dispositivi.page.scss'],
  standalone:false
})
export class DispositiviPage implements OnInit {

  constructor(private router: Router) { }


  filtro: string = "luci"

  listaDispositivi = [
    {
      "favourite": true,
      "nome": "LED1",
      "stato": false,
      "tipo": 0
    },
    {
      "favourite": false,
      "nome": "LED2",
      "stato": true,
      "tipo": 0
    },
    {
      "favourite": false,
      "nome": "Tapparella1",
      "stato": true,
      "tipo": 1
    }
  ]

  dispositiviMostrati = this.listaDispositivi

  ngOnInit() {
  }

  goHome(){
    this.router.navigate(['home'])
  }

  async filtraDispositivi(event:any){
    console.log(event)
    let filtro = event.detail.value
    
    if(filtro == 'tutti')
    {
      this.dispositiviMostrati = this.listaDispositivi
    }
    else if(filtro == 'luci')
    {
      this.dispositiviMostrati = this.listaDispositivi.filter(d => d.tipo == 0)
    }
    else if(filtro == 'tapparelle')
    {
      this.dispositiviMostrati = this.listaDispositivi.filter(d => d.tipo == 1)
    }
    else if(filtro == 'preferiti')
    {
      this.dispositiviMostrati = this.listaDispositivi.filter(d => d.favourite)
    }
  }


}
