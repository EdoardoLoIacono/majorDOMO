import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private router: Router){}

  categories = [
    { name: 'Dispositivi', img: 'lampadina',route:'dispositivi' },
    { name: 'Stanze', img: 'porta',route:'' },
    { name: 'Pulsanti virtuali', img: 'pulsanti',route:'' },
    { name: 'Clima', img: 'clima',route:'' },
    { name: 'Allarmi', img: 'allarmi',route:'' },
    { name: 'Funzioni', img: 'funzioni',route:'' },
    { name: 'Videocitofono', img: 'telecamere',route:'' },
    { name: 'Telecamere', img: 'telecamere',route:'' }
  ];


  goToCategory(category: any){
    if(category.route){
      this.router.navigate([category.route])
    }
  }

  goHome(){
    this.router.navigate(['home'])
  }
}
