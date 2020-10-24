import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './logo/logo.component';
import { InfousuarioComponent } from './infousuario/infousuario.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    InfousuarioComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    InfousuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
