import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigilantesPage } from './vigilantes.page';

const routes: Routes = [
  {
    path: '',
    component: VigilantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigilantesPageRoutingModule {}
