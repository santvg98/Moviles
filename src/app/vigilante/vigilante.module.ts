import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VigilantePageRoutingModule } from './vigilante-routing.module';

import { VigilantePage } from './vigilante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VigilantePageRoutingModule
  ],
  declarations: [VigilantePage]
})
export class VigilantePageModule {}
