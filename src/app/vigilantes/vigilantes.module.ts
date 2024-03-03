import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigilantesPageRoutingModule } from './vigilantes-routing.module';

import { VigilantesPage } from './vigilantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigilantesPageRoutingModule
  ],
  declarations: [VigilantesPage]
})
export class VigilantesPageModule {}
