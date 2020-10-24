import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-violentometro',
  templateUrl: './violentometro.page.html',
  styleUrls: ['./violentometro.page.scss'],
})
export class ViolentometroPage implements OnInit {

  public dataUser:[];

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }


  /**
   * Método para navegar a una url exterior 
   * @param url -> Url del sitio web a navegar
   */
  public async NavegarExt(url:string){
    const browser = await this.iab.create(url, '_system');
  }

}
