import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    this.statusBar.styleLightContent();
    this.splashScreen.hide();

    });
  }


  /**
   * Método que navega a Orientación
   */
  public navInicio(){
    this.router.navigate(['tabs','inicio']);
  }



  /**
   * Método que navega a Orientación
   */
  public navOrientacion(){
    this.router.navigate(['tabs','orientacion']);
  }
  

  /**
   * Método que navega a Pánico
   */
  public navPanico(){
    this.router.navigate(['tabs','panico']);
  }


  /**
   * Método que navega a Información
   */
  public navInformacion(){
    this.router.navigate(['tabs','informacion']);
  }


  /**
   * Método que navega a Líneas de emergencia
   */
  public navLineasEmergencia(){
    this.router.navigate(['tabs','lineas-emergencia']);
  }


  /**
   * Método que navega a Conócenos
   */
  public navConocenos(){
    this.router.navigate(['tabs','conocenos']);
  }
  
  /**
   * Método que navega a entérate
   */
  public navEnterate = () =>{
    this.router.navigate(['tabs','enterate']);
  }



  /**
   * Método para navegar a Violentómetro
   */
  public navViolentrometro(){
    this.router.navigate(['tabs','violentometro']);
  }
  
  /**
   * Método para navegar al manual de uso
   */
  public navManualUso = () =>{
    this.router.navigate(['tabs','manual-uso']);
  }


  /**
   * Método que navega a Formulario registro
   */
  public navFormRegister(){
    this.router.navigate(['tabs','formulario-registro']);
  }




}
