import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  imports: [RouterModule, IonicModule],
})
export class PageWrapperComponent implements OnInit {
  showHeader = false;
  title = 'MajorDomo';
  defaultHref = '/home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url;
      // console.log(currentUrl);

      switch (currentUrl) {
        case '/home/dispositivi':
          this.showHeader = true;
          this.title = 'Dispositivi';
          break;
        case '/home/pulsanti-virtuali':
          this.showHeader = true;
          this.title = 'Pulsanti Virtuali'
          break;
        default:
          this.showHeader = false;
          break;
      }
    });
  }
}
