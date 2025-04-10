import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DispositiviPage } from './pages/dispositivi/dispositivi.component';
import { PulsantiVirtualiComponent } from './pages/pulsanti-virtuali/pulsanti-virtuali.component';
import { AllarmiComponent } from './pages/allarmi/allarmi.component';
import { AccountPage } from './pages/account/account.page';
import { StatistichePage } from './pages/statistiche/statistiche.page';
import { ImpostazioniPage } from './pages/impostazioni/impostazioni.page';
import { StanzeComponent } from './pages/stanze/stanze.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
      
    ]
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
  },
  {
    path: 'allarmi',
    component: AllarmiComponent
  },
  {
    path: 'stanze',
    component: StanzeComponent
  },
  {
    path: 'statistiche',
    component: StatistichePage,
  },
  {
    path: 'account',
    component: ImpostazioniPage,
  },
];
