import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  constructor(
                private alertCtrl: AlertController,
                private loadingCtrl: LoadingController,
                private sms:SMS
    ) { }

  ngOnInit() {
    this.LoadingEnviandoMensajes();
    this.enviaSmsEmergencia();
  }


  /**
   * Método que envía los mensajes de emergencia
   */
  public enviaSmsEmergencia(){
    this.sms.send('3165347875', 'Hola necesito ayuda!!')
  }




  /**
   * Método loading para preparar los mensajes a enviar
   */
  public async LoadingEnviandoMensajes(){
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      duration: 5000,
      message: 'Estamos notificando vía Mensaje de texto a los contactos de emergencia que tienes como referencia... ',
      translucent: true,
      cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();
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
