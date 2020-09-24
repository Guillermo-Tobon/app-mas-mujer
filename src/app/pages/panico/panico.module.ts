import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanicoPageRoutingModule } from './panico-routing.module';

import { PanicoPage } from './panico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PanicoPage]
})
export class PanicoPageModule {}
