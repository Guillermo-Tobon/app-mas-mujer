import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  /**
   * Método para navegar al formulario de registro
   */
  public navFormRegister(){
    this.router.navigateByUrl('/home');
  }

}
