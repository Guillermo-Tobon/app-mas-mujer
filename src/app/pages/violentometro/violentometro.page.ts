import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-violentometro',
  templateUrl: './violentometro.page.html',
  styleUrls: ['./violentometro.page.scss'],
})
export class ViolentometroPage implements OnInit {

  constructor( private iab: InAppBrowser ) { }

  ngOnInit() {
  }


  /**
   * Método para navegar a una url exterior 
   * @param url -> Url del sitio web a navegar
   */
  public async NavegarExt(url:string){
    const browser = await this.iab.create(url, '_system');
  }

}
