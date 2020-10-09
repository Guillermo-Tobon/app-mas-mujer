import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public exprNum:string = "/^[0-9]$/";
  public formValidarUser: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController
  ) {
    this.formValidarUser = this.formBuilder.group({
      numeroIdentifica: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(){
    
  }


  /**
   * Método para guardar la data del formulario de registro
   */
  public ValidarUsuario(){
    if (this.formValidarUser.value.numeroIdentifica === "") {
      this.alertUserValida();

    } else {
      console.log(this.formValidarUser.value);

    }
  }











  /********************************************
   * Métodos de validaciones 
   ********************************************/
  /**
   * Método alert async para validar los datos del form
   */
  async alertUserValida(){
    const alert = await this.alertCtrl.create({
      header: 'Advertencia',
      subHeader: 'Falta términos y condiciones',
      message: 'Has diligenciado bien el formulario, pero falta aceptar términos y condiciones.\n Si tienes dudas o inquietudes, puedes leer los términos en el botón de "Leer más."',
      buttons: ['OK']
    });
    await alert.present();
  }






}
