import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineasEmergenciaPage } from './lineas-emergencia.page';

const routes: Routes = [
  {
    path: '',
    component: LineasEmergenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineasEmergenciaPageRoutingModule {}
