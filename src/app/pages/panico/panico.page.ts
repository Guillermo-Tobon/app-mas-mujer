import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  public dataUser:[];

  constructor(
                private alertCtrl: AlertController,
                private loadService: LoadingService,
                private callNumber: CallNumber,
                private sms:SMS
    ) { }

  ngOnInit() {

    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

  
  /**
   * Método para recargar la página de pánico
   * @param event -> Data del evento refresh
   */
  public CargandoPanico( event:any ){
    this.enviaSmsEmergencia();
    event.target.complete();
  }


  /**
   * Método que envía los mensajes de emergencia
   */
  public enviaSmsEmergencia(){
    this.loadService.showLoading('Estamos enviando un mensaje de texto a los contactos de emergencia...');
    const options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
      }
    }

    this.sms.send( '3196834539', 'Hola Contacto de emergencia, necesito ayuda!!', options).then( resp =>{
      console.log( resp );
    }).catch( err =>{
      console.log("ERROR -> ", err );
    })

    this.loadService.hideLoading();

  }


  /**
   * Método que envía mensaje de emergencia
   * @param number -> Número telefónico
   */
  public EnviaMensajeTexto(number:any){
    this.loadService.showLoading('Estamos procesando el mensaje de emergencia...');
    const options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send( number, 'Hola Contacto de emergencia, necesito ayuda!!', options).then( resp =>{
      console.log( resp );
    }).catch( err =>{
      console.log("ERROR -> ", err );
    })

    this.loadService.hideLoading();
  }


  /**
   * Método para realizar llamadas directamente
   * @param number -> Número telefónico
   */
  public RealizaLlamada(number:any){
    this.callNumber.callNumber(number, true).then( resp => {
      console.log( resp );

    }).catch( err =>{
      console.log( err );

    });
  }



  /**
   * Método tipo alert para notificar el envío de los mensajes
   */
  public async AlertNotificacionMensajes(){
    const alert = await this.alertCtrl.create({
      header: 'Botón Pánico!',
      message: 'This is an alert message.',
      buttons: ['OK']
    })
    await alert.present();
  }





}
