import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orientacion',
  templateUrl: './orientacion.page.html',
  styleUrls: ['./orientacion.page.scss'],
})
export class OrientacionPage implements OnInit {

  public violencia: String;
  public agresor: String;

  constructor( 
              private AlertCtrl: AlertController
              ) { }

  ngOnInit() {
    
  }

  /**
   * Método para obtener la orientación según el filtro
   */
  public ObtenerOrientacion(){
    if(this.violencia == undefined || this.agresor == undefined){
      this.alertFiltrosOrient();

    } else {
      console.log(this.violencia);
      console.log(this.agresor);

      /// ACA SE HACE OBTIENE LA RESPUESTA DEL SERVICIO
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

}
