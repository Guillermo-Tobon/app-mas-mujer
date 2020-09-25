import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineasEmergenciaPageRoutingModule } from './lineas-emergencia-routing.module';

import { LineasEmergenciaPage } from './lineas-emergencia.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineasEmergenciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LineasEmergenciaPage]
})
export class LineasEmergenciaPageModule {}
