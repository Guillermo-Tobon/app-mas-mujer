import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infousuario',
  templateUrl: './infousuario.component.html',
  styleUrls: ['./infousuario.component.scss'],
})
export class InfousuarioComponent implements OnInit {

  @Input() nombreUser: String = '';
  @Input() correoUser: String = '';

  constructor() { }

  ngOnInit() {}

}
