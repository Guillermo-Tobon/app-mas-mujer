import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public exprNum:string = "/^[0-9]$/";
  public formRegistro: FormGroup;

  constructor(
              private formBuilder: FormBuilder
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
      terminos: ['',Validators.required]
    })
  }


  /**
   * Método para guardar la data del formulario de registro
   */
  public GuardarDataForm(){
    console.log(this.formRegistro.value);
  }

}
