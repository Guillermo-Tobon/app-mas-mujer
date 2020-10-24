import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualUsoPageRoutingModule } from './manual-uso-routing.module';

import { ManualUsoPage } from './manual-uso.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualUsoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManualUsoPage]
})
export class ManualUsoPageModule {}
