import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioRegistroPageRoutingModule } from './formulario-registro-routing.module';

import { FormularioRegistroPage } from './formulario-registro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ComponentsModule,
    FormularioRegistroPageRoutingModule
  ],
  declarations: [FormularioRegistroPage]
})
export class FormularioRegistroPageModule {}
