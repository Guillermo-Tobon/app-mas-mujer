import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterate',
  templateUrl: './enterate.page.html',
  styleUrls: ['./enterate.page.scss'],
})
export class EnteratePage implements OnInit {

  public dataUser:[];

  constructor() { }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }

}
