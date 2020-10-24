import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-uso',
  templateUrl: './manual-uso.page.html',
  styleUrls: ['./manual-uso.page.scss'],
})
export class ManualUsoPage implements OnInit {

  public dataUser:[];

  constructor() { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

}
