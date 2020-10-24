import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-lineas-emergencia',
  templateUrl: './lineas-emergencia.page.html',
  styleUrls: ['./lineas-emergencia.page.scss'],
})
export class LineasEmergenciaPage implements OnInit {

  public dataUser:[];

  constructor( private callNumber: CallNumber ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

  /**
   * Método para realizar llamadas directamente
   * @param number -> Número telefónico
   */
  public HacerllamadaDirecta(number:any){
    this.callNumber.callNumber(number, true).then( resp => {
      console.log( resp );

    }).catch( err =>{
      console.log( err );

    });
  }

}
