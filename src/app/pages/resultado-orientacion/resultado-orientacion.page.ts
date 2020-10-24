import { Component, OnInit } from '@angular/core';
import { OrientacionService } from 'src/app/services/orientacion.service';

@Component({
  selector: 'app-resultado-orientacion',
  templateUrl: './resultado-orientacion.page.html',
  styleUrls: ['./resultado-orientacion.page.scss'],
})
export class ResultadoOrientacionPage implements OnInit {

  public arrayOrienta:any;
  public dataUser:[];

  constructor(
              private OrientaSrv: OrientacionService
  ) { }

  ngOnInit() {
    //Obtiene el array con la info de orientación
    this.arrayOrienta = this.OrientaSrv.arrayOrienta;

    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

}
