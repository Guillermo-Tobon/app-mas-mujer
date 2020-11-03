import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ResponseInformacion } from 'src/app/interfaces/interfaces';
import { LoadingService } from 'src/app/services/loading.service';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  public infoData:ResponseInformacion[] = [];
  public dataUser:[];

  constructor( 
                private infoServices: InformacionService,
                private iab: InAppBrowser,
                private loadSrv: LoadingService,
                private alertCtrl: AlertController
                ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
    
    this.getInfoData();
  }


  /**
   * Método que obtiene la data de información
   */
  public getInfoData = () =>{
    this.loadSrv.showLoading();

    this.infoServices.getInformacionService().then( data =>{
      this.infoData = data['informacion'];

    }).catch( err =>{
      this.AlertEsponseData();
    })
    this.loadSrv.hideLoading();
  }


  /**
   * Método para navegar a una url exterior 
   * @param url -> Url del sitio web a navegar
   */
  public async VerArticuloCompleto(url:string){
    const browser = await this.iab.create(url, '_system');
  }





  /**
   * Método de alerta para validar el proceso
   */
  public AlertEsponseData = async() =>{
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Problemas para obtener los datos',
      message: 'Al parecer hay un problema para obtener los datos. \n Inténtalo más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }



}
