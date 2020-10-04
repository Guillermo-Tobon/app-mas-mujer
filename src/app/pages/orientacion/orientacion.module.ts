import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrientacionPageRoutingModule } from './orientacion-routing.module';

import { OrientacionPage } from './orientacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrientacionPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule 
  ],
  declarations: [OrientacionPage]
})
export class OrientacionPageModule {}
