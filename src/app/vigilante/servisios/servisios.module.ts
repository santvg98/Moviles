import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServisiosPageRoutingModule } from './servisios-routing.module';

import { Exportar} from './servisios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServisiosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [Exportar]
})
export class ServisiosPageModule {}
