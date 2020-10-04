import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoOrientacionPageRoutingModule } from './resultado-orientacion-routing.module';

import { ResultadoOrientacionPage } from './resultado-orientacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoOrientacionPageRoutingModule
  ],
  declarations: [ResultadoOrientacionPage]
})
export class ResultadoOrientacionPageModule {}
