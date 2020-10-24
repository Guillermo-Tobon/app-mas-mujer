import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.page.html',
  styleUrls: ['./formulario-registro.page.scss'],
})
export class FormularioRegistroPage implements OnInit {

  public exprNum:string = "/^[0-9]$/";
  public formRegistro: FormGroup;
  public dataUser:[];

  constructor(
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController,
              public toastController: ToastController,
              private usuarioSrv: UsuariosService,
              private loadingSrv: LoadingService,
              private router: Router
    ) {
    }

  ngOnInit() {
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );

    this.formRegistro = this.formBuilder.group({
      nombre_us: [this.dataUser['nombre_us'], Validators.required],
      num_identifica_us: [this.dataUser['num_identifica_us'], [Validators.required, Validators.minLength(6)]],
      tipo_identifica_us: ['Cédula de ciudadanía', [Validators.required]],
      direccion_us: [this.dataUser['direccion_us'], Validators.required],
      ciudad_us: [this.dataUser['ciudad_us'],Validators.required],
      departamento_us: [this.dataUser['departamento_us'],Validators.required],
      telefono_us: [this.dataUser['telefono_us'], [Validators.required, Validators.minLength(10)]],
      correo_us: [this.dataUser['correo_us'], [Validators.required, Validators.email]],
      nom_contacto_uno_us: [this.dataUser['nom_contacto_uno_us'], Validators.required],
      tel_contacto_uno_us: [this.dataUser['tel_contacto_uno_us'], [Validators.required, Validators.minLength(10)]],
      nom_contacto_dos_us: [this.dataUser['nom_contacto_dos_us'], Validators.required],
      tel_contacto_dos_us: [this.dataUser['tel_contacto_dos_us'], [Validators.required, Validators.minLength(10)]],
      terminos: ['false',Validators.required]
    })
    
  }

  public ionViewWillEnter = () =>{
    //Obtiene data del localStorage
    this.dataUser = JSON.parse( localStorage.getItem('usuario') );
  }


  /**
   * Método para guardar la data del formulario de registro
   */
  public GuardarDataForm = () =>{
    this.loadingSrv.showLoading('Procesando datos. \n Un momento por favor...');

    if (this.formRegistro.value.terminos === "false") {
      this.alertTerminos();

    } else {

      //Actualizamos el usuario en la BD
      this.usuarioSrv.updateUserById(this.formRegistro.value).then( resp =>{
        if ( resp['ok'] ) {
          localStorage.setItem('usuario', JSON.stringify(this.formRegistro.value));
          this.updateSuccessToast();
          setTimeout(() => { this.router.navigate(['tabs','inicio']); }, 2000);

        } else {
          this.alertInsetFailed();
        }
      })

      this.loadingSrv.hideLoading();
    }
  }



  /**
   * Método que cancela el form y redirecciona al inicio
   */
  public CancelarRegistro = () =>{
    this.router.navigate(['tabs','inicio']);
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



  /**
   * Método alert async para validar los datos del form
   */
  async alertInsetFailed(){
    const alert = await this.alertCtrl.create({
      header: 'Error',
      subHeader: 'Problemas para actualizar los datos',
      message: 'Al parecer hay un problema para actualizar los datos. \n Inténtalo más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }



  /**
   * Método Toast del proceso correcto
   */
  public updateSuccessToast = async() =>{
    const toast = await this.toastController.create({
      message: 'Datos Actualizados con éxito!!',
      duration: 2000
    });
    toast.present();
  }







}
