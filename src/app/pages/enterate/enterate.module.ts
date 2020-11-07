import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnteratePageRoutingModule } from './enterate-routing.module';

import { EnteratePage } from './enterate.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EnteratePageRoutingModule
  ],
  declarations: [EnteratePage]
})
export class EnteratePageModule {}
