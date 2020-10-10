import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { InformacionService } from 'src/app/services/informacion.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  public infoData:any = [];

  constructor( 
                private infoServices: InformacionService,
                private loadingCtrl: LoadingController,
                private iab: InAppBrowser  ) { }

  ngOnInit() {

    this.getInfoData();
  }


  /**
   * Método que obtiene la data de información
   */
  public getInfoData(){
    this.infoServices.getInformacionService().subscribe( data =>{
      this.infoData = data;
      console.log(this.infoData);
    })
  }


  /**
   * Método para navegar a una url exterior 
   * @param url -> Url del sitio web a navegar
   */
  public async VerArticuloCompleto(url:string){
    const browser = await this.iab.create(url, '_system');
  }

}
