import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoOrientacionPage } from './resultado-orientacion.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoOrientacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoOrientacionPageRoutingModule {}
