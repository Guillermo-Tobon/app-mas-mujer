import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor( 
              private router: Router
              ) { }

  ngOnInit() {
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
