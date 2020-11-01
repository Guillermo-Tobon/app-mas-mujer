import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalMapaAyudaPage } from './modal-mapa-ayuda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMapaAyudaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalMapaAyudaPageRoutingModule {}
