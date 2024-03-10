import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VigilantePage } from './vigilante.page';

const routes: Routes = [
  {
    path: '',
    component: VigilantePage
  },
  {
    path: 'servisios',
    loadChildren: () => import('./servisios/servisios.module').then( m => m.ServisiosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VigilantePageRoutingModule {}
