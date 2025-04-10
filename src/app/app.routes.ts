import { Routes } from '@angular/router';

import { PageWrapperComponent } from './shared/page-wrapper/page-wrapper.component';

import { HomePage } from './pages/home/home.page';
import { DispositiviPage } from './pages/home/dispositivi/dispositivi.component';
import { PulsantiVirtualiComponent } from './pages/home/pulsanti-virtuali/pulsanti-virtuali.component';

import { StatistichePage } from './pages/statistiche/statistiche.page';

import { AccountPage } from './pages/account/account.page';

export const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'home/dispositivi',
        component: DispositiviPage,
      },
      {
        path: 'home/pulsanti-virtuali',
        component: PulsantiVirtualiComponent,
      },
      {
        path: 'statistiche',
        component: StatistichePage,
      },
      {
        path: 'account',
        component: AccountPage,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
