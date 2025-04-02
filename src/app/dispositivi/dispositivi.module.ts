import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositiviPage } from './dispositivi.page';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LuceComponent } from '../dispositivo/luce/luce.component';

const routes: Routes = [{ path: '', component: DispositiviPage }];

@NgModule({
    imports: [RouterModule.forChild(routes), IonicModule, CommonModule, FormsModule, DispositiviPage, LuceComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DispositiviPageModule {}