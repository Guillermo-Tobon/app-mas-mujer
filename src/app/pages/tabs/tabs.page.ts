import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  public estadoUser:any;

  constructor( private router: Router,
               private actSheetCtrl: ActionSheetController,
               private callNumber: CallNumber,
               ) { }

  ngOnInit() {

  }


  /**
   * Método para abrir las líneas rapidas
   */
  public async OpenLineasRapidas(){
    const actionSheet = await this.actSheetCtrl.create({
      buttons: [
        {
          text: 'Violencia de género',
          icon: 'call-outline',
          handler: () => {
            this.HacerllamadaDirecta(155);
          }
        }, {
          text: 'Policia',
          icon: 'call-outline',
          handler: () => {
            this.HacerllamadaDirecta(123);
          }
        },{
          text: 'Gaula',
          icon: 'call-outline',
          handler: () => {
            this.HacerllamadaDirecta(147);
          }
        }, {
          text: 'Fiscalia',
          icon: 'call-outline',
          handler: () => {
            this.HacerllamadaDirecta(122);
          }
        },{
          text: 'ICBF',
          icon: 'call-outline',
          handler: () => {
            this.HacerllamadaDirecta(141);
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
   * Método para realizar llamadas directamente
   * @param number -> Número telefónico
   */
  public HacerllamadaDirecta(number:any){
    this.callNumber.callNumber(number, true).then( resp => {
    }).catch( err =>{
    });
  }

}
