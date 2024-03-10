import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Exportar } from './servisios.page';

const routes: Routes = [
  {
    path: '',
    component: Exportar
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServisiosPageRoutingModule {}
