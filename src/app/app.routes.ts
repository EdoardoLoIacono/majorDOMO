import { Routes } from '@angular/router';
import { HomePage } from './pagine/home/home.page';
import { DispositiviPage } from './pagine/dispositivi/dispositivi.component';
import { PulsantiVirtualiComponent } from './pagine/pulsanti-virtuali/pulsanti-virtuali.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dispositivi',
    component: DispositiviPage
  },
  {
    path: 'pulsantiVirtuali',
    component: PulsantiVirtualiComponent
  }
];
