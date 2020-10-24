import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { OrientacionService } from 'src/app/services/orientacion.service';

@Component({
  selector: 'app-orientacion',
  templateUrl: './orientacion.page.html',
  styleUrls: ['./orientacion.page.scss'],
})
export class OrientacionPage implements OnInit {

  public violencia: String;
  public agresor: String;
  public dataUser:[];

  constructor( 
              private AlertCtrl: AlertController,
              private orientaSrv: OrientacionService,
              private loadingSrv: LoadingService,
              private router: Router
              ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

  /**
   * Método para obtener la orientación según el filtro
   */
  public ObtenerOrientacion(){
    if(this.violencia == undefined || this.agresor == undefined){
      this.alertFiltrosOrient();

    } else {
      this.loadingSrv.showLoading('Consultado información...')

      this.orientaSrv.getOrientacionById(this.violencia, this.agresor).then( resp =>{

        if ( resp['ok'] ) {
          this.orientaSrv.getResultOrientacion(resp['orientacion']);
          this.router.navigate(['tabs', 'resultado-orientacion']);
          
        } else {
          this.alertNoFound();
        }

      }).catch( err =>{
        this.alertProblemConnect();
      })
      
      this.loadingSrv.hideLoading();
    }

  }










  /***************************************************************************/
  //MÉTODOS DE PROCESOS Y SUBPROCESOS

  /**
   * Método alert async para validar los filtros de orientación
   */
  async alertFiltrosOrient(){
    const alert = await this.AlertCtrl.create({
      header: 'Advertencia!',
      subHeader: 'Filtros de busqueda.',
      message: 'Te falta seleccionar o un tipo de violencia o un tipo de agresor.',
      buttons: ['OK']
    })
    await alert.present();
  }


  /**
   * Método alert async para validar los filtros de orientación
   */
  async alertNoFound(){
    const alert = await this.AlertCtrl.create({
      header: 'Respuesta!',
      subHeader: 'Resultado de la busqueda.',
      message: 'Al parecer no hay resultados. Intenta con otros filtros.',
      buttons: ['OK']
    })
    await alert.present();
  }


  /**
   * Método alert async para validar los filtros de orientación
   */
  async alertProblemConnect(){
    const alert = await this.AlertCtrl.create({
      header: 'Error!',
      subHeader: 'Problemas de conexión.',
      message: 'Al parecer hay un problema de conexión. Inténtalo más tarde.',
      buttons: ['OK']
    })
    await alert.present();
  }


}
