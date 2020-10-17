import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public isLoading: boolean = false;

  constructor( private loadingCtrl: LoadingController ) { }



  public showLoading = async(message?: string) =>{
    this.isLoading = true;
    this.loadingCtrl.create({
      message: message ? message : 'Procesando datos...',
      spinner: 'bubbles'
    }).then( loader =>{
      loader.present().then( () =>{
        if(!this.isLoading){
          loader.dismiss();
        }
      })
    })
  }



  public hideLoading = async() =>{
    this.isLoading = false;
    this.loadingCtrl.getTop().then( loader =>{
      if (loader) {
        loader.dismiss();
      }
    })
  }




}
