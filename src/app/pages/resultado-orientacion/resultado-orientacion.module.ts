import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoOrientacionPageRoutingModule } from './resultado-orientacion-routing.module';

import { ResultadoOrientacionPage } from './resultado-orientacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoOrientacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResultadoOrientacionPage]
})
export class ResultadoOrientacionPageModule {}
