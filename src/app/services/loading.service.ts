import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: boolean = false;

  constructor( private loadingCtrl: LoadingController ) { }



  public async loadingPresent( message:string ){
    this.isLoading = true;

    return await this.loadingCtrl.create({
      spinner: 'bubbles',
      message,
      translucent: true,
      backdropDismiss: false
    }).then( a =>{
      a.present().then(() =>{
        console.log('loading presented');

        if(!this.isLoading){
          a.dismiss().then(() => console.log('abort laoding'));
        }
      })
    })
  }



  public async loadingDismiss(){
    this.isLoading = false;

    return await this.loadingCtrl.dismiss().then(() => console.log('loading dismissed'));
  }




}
