import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { LoadingService } from 'src/app/services/loading.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

declare var mapboxgl: any;

@Component({
  selector: 'app-modal-mapa-ayuda',
  templateUrl: './modal-mapa-ayuda.page.html',
  styleUrls: ['./modal-mapa-ayuda.page.scss'],
})
export class ModalMapaAyudaPage implements OnInit, AfterViewInit {

  public dataEntidades:[] = [];
  public dataUser:any[] = [];

  constructor(
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private loadService: LoadingService,
              private callNumber: CallNumber,
  ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

  ngAfterViewInit(){
    this.dataEntidades = [];
    this.dataEntidades = JSON.parse(localStorage.getItem('entidades'));

    //Carga el mapa
    this.loadMap(this.dataEntidades);
  }



  /**
   * Método para cargar mapa
   */
  public loadMap = async(entidades:any[]) =>{
    this.loadService.showLoading('Cargando ubicación...');
    
    mapboxgl.accessToken = environment.API_KEY_MAPA;
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v10',
      center: [Number(entidades[0].lng_enti), Number(entidades[0].lat_enti)],
      zoom: 12.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map2',
      antialias: true
      });

      map.on('load', () =>{
        // Insert the layer beneath any symbol layer.
        map.resize();
        const layers = map.getStyle().layers;

        //Marker
        for(let i= 0; i < entidades.length; i++){
          new mapboxgl.Marker().setLngLat([Number(entidades[i].lng_enti), Number(entidades[i].lat_enti)]).addTo(map);
        }
        
         
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
   * Método para realizar llamadas directamente
   * @param number -> Número telefónico
   */
  public RealizaLlamada(number:any){
    this.callNumber.callNumber(number, true).then( resp => {

    }).catch( err =>{
      this.AlertCargaFailed();

    });
  }



  //Método para cerrar modal
  closeModal(){
    localStorage.removeItem('entidades');
    this.dataEntidades = [];
    this.modalCtrl.dismiss();
  }




  public AlertCargaFailed = async() =>{
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Problemas de conexón',
      message: 'Al parecer hay un problema de conexión. \n Inténtalo más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  } 


}
