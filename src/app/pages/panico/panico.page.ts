import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  constructor(
                private alertCtrl: AlertController,
                private loadService: LoadingService,
                private sms:SMS
    ) { }

  ngOnInit() {
    this.enviaSmsEmergencia();
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
    this.loadService.loadingPresent('Estamos enviando un mensaje de texto a los contactos de emergencia...');
    
    this.sms.send('3165347875', 'Hola necesito ayuda!!').then( resp =>{
      console.log( resp );
    }).catch( err =>{
      console.log("ERROR -> ", err );
    })

    this.loadService.loadingDismiss();

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
