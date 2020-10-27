import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { async } from '@angular/core/testing';

declare var google;

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit {

  public dataUser:[];
  public mapRef:any = null;

  constructor(
                private alertCtrl: AlertController,
                private loadService: LoadingService,
                private callNumber: CallNumber,
                private geoloca: Geolocation,
                private sms:SMS
    ) { }

  ngOnInit() {

    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );

    this.loadMap()
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



  public loadMap = async() =>{
    this.loadService.showLoading('Cargando ubicación...');

    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');

    this.mapRef = new google.maps.Map( mapEle, {
      center: myLatLng,
      zoom: 14
    });

    google.maps.event.addListenerOnce(this.mapRef, 'idle', () =>{
      this.loadService.hideLoading();
      this.addMarker(myLatLng.lat, myLatLng.lng);
    
    });
   }


   /**
    * Método privado para obtener la localización
    */
  private getLocation = async() =>{
    const rta = await this.geoloca.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    }
  }
   

  /**
   * Método privado para generar un marker
   * @param lat -> Latitud
   * @param lng -> Longitud
   */
  private addMarker = (lat:Number, lng:Number) =>{
    const marker = new google.maps.Marker({
      position: { lat, lng },
      zoom: 8,
      map: this.mapRef,
      title: 'Mi ubicación actual.'
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
