import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
              private router: Router
              ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

  /**
   * Método para obtener la orientación según el filtro
   */
  public ObtenerOrientacion = () =>{
    if(this.violencia == undefined || this.agresor == undefined){
      this.alertFiltrosOrient();

    } else {
      this.router.navigate(['tabs', 'resultado-orientacion', this.violencia, this.agresor]);
      
    }
  }



  /**
   * Método para navegar al inicio 
   */
  public CancelarOrientacion = () =>{
    this.router.navigate(['tabs', 'inicio']);
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
