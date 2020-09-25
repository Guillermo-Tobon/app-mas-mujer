import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrientacionPage } from './orientacion.page';

const routes: Routes = [
  {
    path: '',
    component: OrientacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrientacionPageRoutingModule {}
