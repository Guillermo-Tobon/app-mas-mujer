import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from '../../../environments/environment';

declare var mapboxgl: any;

@Component({
  selector: 'app-panico',
  templateUrl: './panico.page.html',
  styleUrls: ['./panico.page.scss'],
})
export class PanicoPage implements OnInit, AfterViewInit {

  public dataUser:[];
  public mapRef:any = null;
  public urlMap: String;

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
  }
  

  ngAfterViewInit(){
    //Carga el mapa
    this.loadMap();
  }
  
  
  /**
   * Método para recargar la página de pánico
   * @param event -> Data del evento refresh
   */
  public CargandoPanico( event:any ){
    //Carga el mapa
    this.loadMap();
    event.target.complete();
  }



  /**
   * Método que envía mensaje de emergencia
   * @param number -> Número telefónico
   */
  public EnviaMensajeTexto(number:any, nomContacto:String){
    this.loadService.showLoading('Estamos procesando el mensaje de emergencia...');
    
    const options = {
      replaceLineBreaks: false,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send( number, `Hola ${nomContacto}, te estoy contactando desde la App +Mujer y necesito ayuda. Me encuentro en esta ubicación :${this.urlMap}`, options).then( resp =>{
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

    this.urlMap  = `https://www.openstreetmap.org/?mlat=${myLatLng.lat}&mlon=${myLatLng.lng}#map=19/${myLatLng.lat}/${myLatLng.lng}`;
    
    mapboxgl.accessToken = environment.API_KEY_MAPA;
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [Number(myLatLng.lng), Number(myLatLng.lat)],
      zoom: 16.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
      });

      map.on('load', () =>{
        // Insert the layer beneath any symbol layer.
        map.resize();
        const layers = map.getStyle().layers;

        //Marker
        new mapboxgl.Marker().setLngLat([Number(myLatLng.lng), Number(myLatLng.lat)]).addTo(map);
         
        let labelLayerId;
        for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
          }
        }
         
        map.addLayer(
            {
              'id': '3d-buildings',
              'source': 'composite',
              'source-layer': 'building',
              'filter': ['==', 'extrude', 'true'],
              'type': 'fill-extrusion',
              'minzoom': 15,
              'paint': {
              'fill-extrusion-color': '#aaa',
         
              // use an 'interpolate' expression to add a smooth transition effect to the
              // buildings as the user zooms in
              'fill-extrusion-height': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'height']
              ],
              'fill-extrusion-base': [
                'interpolate',
                ['linear'],
                ['zoom'],
                15,
                0,
                15.05,
                ['get', 'min_height']
              ],
              'fill-extrusion-opacity': 0.6
            }
            },
            labelLayerId
        );
      });
    this.loadService.hideLoading();
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
