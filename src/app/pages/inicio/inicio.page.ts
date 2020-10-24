import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public dataUser:[];
  public estadoUser:any;

  constructor( 
              private router: Router,
              private infoSrv: InformacionService
              ) { }

  ngOnInit() {

    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
    
  }




  /**
   * Método que navega a Orientación
   */
  public navOrientacion(){
    this.router.navigate(['tabs','orientacion']);
  }


  /**
   * Método que navega a Información
   */
  public navInformacion(){
    this.router.navigate(['tabs','informacion']);
  }

}
