import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViolentometroPage } from './violentometro.page';

const routes: Routes = [
  {
    path: '',
    component: ViolentometroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViolentometroPageRoutingModule {}
