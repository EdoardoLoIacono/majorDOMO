import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [IonicModule, RouterModule],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
