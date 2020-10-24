import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.page.html',
  styleUrls: ['./formulario-registro.page.scss'],
})
export class FormularioRegistroPage implements OnInit {

  public estadoUser:any;
  public exprNum:string = "/^[0-9]$/";
  public formRegistro: FormGroup;

  constructor(
              private formBuilder: FormBuilder,
              private alertCtrl: AlertController,
              private usuarioSrv: UsuariosService,
              private loadingSrv: LoadingService,
              private router: Router
    ) {
      this.formRegistro = this.formBuilder.group({
        nombre_us: ['', Validators.required],
        num_identifica_us: ['', [Validators.required, Validators.minLength(6)]],
        tipo_identifica_us: ['Cédula de ciudadanía', [Validators.required]],
        direccion_us: ['', Validators.required],
        ciudad_us: ['',Validators.required],
        departamento_us: ['',Validators.required],
        telefono_us: ['', [Validators.required, Validators.minLength(10)]],
        correo_us: ['', [Validators.required, Validators.email]],
        nom_contacto_uno_us: ['', Validators.required],
        tel_contacto_uno_us: ['', [Validators.required, Validators.minLength(10)]],
        nom_contacto_dos_us: ['', Validators.required],
        tel_contacto_dos_us: ['', [Validators.required, Validators.minLength(10)]],
        terminos: ['false',Validators.required]
      })
    }

  ngOnInit() {


  }



  /**
   * Método para guardar la data del formulario de registro
   */
  public GuardarDataForm = () =>{
    this.loadingSrv.showLoading('Procesando datos. \n Un momento por favor...');
    let findlUser:[];
    let respUser:[];

    if (this.formRegistro.value.terminos === "false") {
      this.alertTerminos();

    } else {

      //Validamos si el usuario ya esta registrado
      this.usuarioSrv.getAllUsersServices().then( resp =>{
        respUser = resp['usuarios'];

        findlUser = respUser.find( user => user['num_identifica_us'] == this.formRegistro.value.num_identifica_us );

        if (findlUser == undefined) {
          //Guardamos el usuario en la BD
          this.usuarioSrv.insertUserService(this.formRegistro.value).then( resp =>{
            if ( resp['ok'] ) {
              localStorage.setItem('usuario', JSON.stringify(this.formRegistro.value));
              this.router.navigate(['tabs','inicio']);

            } else {
              this.alertInsetFailed();
            }
          })

        } else {
          //Cargamos la info del usuario registrado
          localStorage.setItem('usuario', JSON.stringify(findlUser));
          setTimeout(() => { this.router.navigate(['tabs','inicio']); }, 700);

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
      subHeader: 'Problemas al guardar datos',
      message: 'Al parecer hay un problema al guardar el registro. \n Inténtalo más tarde.',
      buttons: ['OK']
    });
    await alert.present();
  }







}
