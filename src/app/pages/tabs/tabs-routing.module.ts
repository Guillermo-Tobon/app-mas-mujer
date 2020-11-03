import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'panico',
        loadChildren: () => import('../panico/panico.module').then( m => m.PanicoPageModule)
      },
      {
        path: 'orientacion',
        loadChildren: () => import('../orientacion/orientacion.module').then( m => m.OrientacionPageModule)
      },
      {
        path: 'informacion',
        loadChildren: () => import('../informacion/informacion.module').then( m => m.InformacionPageModule)
      },
      {
        path: 'lineas-emergencia',
        loadChildren: () => import('../lineas-emergencia/lineas-emergencia.module').then( m => m.LineasEmergenciaPageModule)
      },
      {
        path: 'resultado-orientacion/:idVio/:idAgre',
        loadChildren: () => import('../resultado-orientacion/resultado-orientacion.module').then( m => m.ResultadoOrientacionPageModule)
      },
      {
        path: 'formulario-registro',
        loadChildren: () => import('../formulario-registro/formulario-registro.module').then( m => m.FormularioRegistroPageModule)
      },
      {
        path: 'conocenos',
        loadChildren: () => import('../conocenos/conocenos.module').then( m => m.ConocenosPageModule)
      },
      {
        path: 'violentometro',
        loadChildren: () => import('../violentometro/violentometro.module').then( m => m.ViolentometroPageModule)
      },
      {
        path: 'manual-uso',
        loadChildren: () => import('../manual-uso/manual-uso.module').then( m => m.ManualUsoPageModule)
      }
    
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
