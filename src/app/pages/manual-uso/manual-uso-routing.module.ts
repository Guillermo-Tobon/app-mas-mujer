import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualUsoPage } from './manual-uso.page';

const routes: Routes = [
  {
    path: '',
    component: ManualUsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualUsoPageRoutingModule {}
