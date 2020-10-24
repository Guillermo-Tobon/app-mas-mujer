import { Component, OnInit } from '@angular/core';
import { InformacionService } from 'src/app/services/informacion.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  public infoData:any = [];
  public dataUser:[];

  constructor( 
                private infoServices: InformacionService,
                private iab: InAppBrowser  ) { }

  ngOnInit() {

    this.getInfoData();
    
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }


  /**
   * Método que obtiene la data de información
   */
  public getInfoData(){
    this.infoServices.getInformacionService().subscribe( data =>{
      this.infoData = data;
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
