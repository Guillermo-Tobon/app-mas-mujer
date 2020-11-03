import { Component, OnInit } from '@angular/core';
import { OrientacionService } from 'src/app/services/orientacion.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController, AlertController, ModalController } from '@ionic/angular';
import { ModalMapaAyudaPage } from 'src/app/modals/modal-mapa-ayuda/modal-mapa-ayuda.page';
import { LoadingService } from 'src/app/services/loading.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-resultado-orientacion',
  templateUrl: './resultado-orientacion.page.html',
  styleUrls: ['./resultado-orientacion.page.scss'],
})
export class ResultadoOrientacionPage implements OnInit {

  public arrayOrienta:any;
  public dataUser:[];

  constructor(
              private OrientaSrv: OrientacionService,
              private loadSrv: LoadingService,
              private iab: InAppBrowser,
              private actSheetCtrl: ActionSheetController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
    //Obtiene el array con la info de orientación
    //this.arrayOrienta = this.OrientaSrv.arrayOrienta;
    
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );

    //Obtenemos las variables enviadas por url
    let idVio = this.route.snapshot.paramMap.get('idVio');
    let idAgre = this.route.snapshot.paramMap.get('idAgre');

    this.getResultOrientacion(idVio, idAgre);
    

  }
  


  /**
   * Método para obtener la orientación según ID
   * @param idVio -> ID violencia
   * @param idAgre -> ID agresor
   */
  public getResultOrientacion = (idVio:any, idAgre:any) =>{
    this.loadSrv.showLoading('Procesando resultado...');

    this.OrientaSrv.getOrientacionById(idVio, idAgre).subscribe( data =>{
      
      if( data['ok'] ){
        this.arrayOrienta = data['orientacion'];

      } else {
        this.alertProblemConnect();
      }
    });
    this.loadSrv.hideLoading();
  }



  /**
   * Método para navegar exterior 
   * @param url -> Url a navegar
   */
  public navegacionExterna = async(url:string) =>{
    const browser = await this.iab.create(url, '_system');
  }


  /**
   * Método para abrir las zonas de ayuda
   */
  public async OpenOtrasAyudas(){
    const actionSheet = await this.actSheetCtrl.create({
      buttons: [
        {
          text: 'Comisaría de Familia',
          icon: 'location-outline',
          handler: () => {
            this.getEntidadesPorId(2);
          }
        },{
          text: 'Inspección de Policía',
          icon: 'location-outline',
          handler: () => {
            this.getEntidadesPorId(1);
          }
        }, {
          text: 'CAVI - Centro de Atención a la violencia Intrafamiliar',
          icon: 'location-outline',
          handler: () => {
            this.getEntidadesPorId(3);
          }
        },{
          text: 'CRAV - Centro Regional de Atención a victimas',
          icon: 'location-outline',
          handler: () => {
            this.getEntidadesPorId(4);
          }
        },{
          text: 'UPV – Unidad de protección a la vida',
          icon: 'location-outline',
          handler: () => {
            this.getEntidadesPorId(5);
          }
        }, {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
      }]
    });
    await actionSheet.present();
  }


  /**
   * Método para obtener las entidades por ID
   * @param id -> ID de las entidades relacioandas
   */
  public getEntidadesPorId = async(id:any) =>{
    this.loadSrv.showLoading('Obteniendo datos...');
    return await this.OrientaSrv.getEntidadesById(id).then( data =>{
      if (data['ok']) {
        localStorage.setItem('entidades', JSON.stringify(data['entidades']));
        this.openModalMapaAyuda();
        
      } else {
        this.alertNoDataEntidades();
      }
      
      this.loadSrv.hideLoading();
    }).catch( err =>{ 
      this.loadSrv.hideLoading();
    });

  }


  /**
   * Método que retorna a orientación
   */
  public VolverOrientacion = () =>{
    this.router.navigate(['tabs', 'orientacion']);
  }



  /**
   * Método para abrir el modal mapa ayuda
   */
  async openModalMapaAyuda(){
    const modal = await this.modalCtrl.create({
      component: ModalMapaAyudaPage
    });
    modal.present();
  }




  /**
   * Método alert async respuesta de la petición
   */
  async alertNoDataEntidades(){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Falla de petición',
      message: 'En este momento no se puede obtener las entidades relacinadas. Inténtelo más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }



  /**
   * Método alert async para validar los filtros de orientación
   */
  async alertProblemConnect(){
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      subHeader: 'Problemas de conexión.',
      message: 'Al parecer hay un problema de conexión. Inténtalo más tarde.',
      buttons: ['OK']
    })
    await alert.present();
  }



}
