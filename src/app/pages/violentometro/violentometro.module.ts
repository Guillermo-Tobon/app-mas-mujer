import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViolentometroPageRoutingModule } from './violentometro-routing.module';

import { ViolentometroPage } from './violentometro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViolentometroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ViolentometroPage]
})
export class ViolentometroPageModule {}
