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
  public formRegistro: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController
  ) {
    this.formRegistro = this.formBuilder.group({
      nombre: ['', Validators.required],
      numeroIdentifica: ['', [Validators.required, Validators.minLength(6)]],
      direccion: ['', Validators.required],
      ciudad: ['',Validators.required],
      departamento: ['',Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      nombreContacto1: ['', Validators.required],
      telefonoContacto1: ['', [Validators.required, Validators.minLength(10)]],
      nombreContacto2: ['', Validators.required],
      telefonoContacto2: ['', [Validators.required, Validators.minLength(10)]],
      terminos: ['false',Validators.required]
    })
  }

  ngOnInit(){
    
  }


  /**
   * Método para guardar la data del formulario de registro
   */
  public GuardarDataForm(){
    if (this.formRegistro.value.terminos === "false") {
      this.alertTerminos();

    } else {
      console.log(this.formRegistro.value);

    }
  }











  /********************************************
   * Métodos de validaciones 
   ********************************************/
  /**
   * Método alert async para validar los datos del form
   */
  async alertTerminos(){
    const alert = await this.alertCtrl.create({
      header: 'Advertencia',
      subHeader: 'Falta términos y condiciones',
      message: 'Has diligenciado bien el formulario, pero falta aceptar términos y condiciones.\n Si tienes dudas o inquietudes, puedes leer los términos en el botón de "Leer más."',
      buttons: ['OK']
    });
    await alert.present();
  }






}
