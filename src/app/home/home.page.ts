import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import { InformacionService } from '../services/informacion.service';
import { ModalRegistroPageModule } from '../modals/modal-registro/modal-registro.module';
import { ModalRegistroPage } from '../modals/modal-registro/modal-registro.page';

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
              private alertCtrl: AlertController,
              private usuarioSrv: UsuariosService,
              private loadingSrv: LoadingService,
              private infoSrv: InformacionService,
              private modalCtrl: ModalController,
              private router: Router
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
  public ValidarUsuario = () =>{
    this.loadingSrv.showLoading('Consultando datos de usuario...');
    let idUser = this.formValidarUser.value.numeroIdentifica;
    
    this.usuarioSrv.getUserPorIdService(idUser).then( data =>{
      localStorage.setItem('usuario', JSON.stringify(data['usuario']))
      this.router.navigate(['tabs','inicio']);
      this.loadingSrv.hideLoading();
      
    }).catch( err =>{
      this.openModalRegistro();
      this.loadingSrv.hideLoading();
    })

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



  /**
   * Método para abrir el modal registro
   */
  async openModalRegistro(){
    const modal = await this.modalCtrl.create({
      component: ModalRegistroPage
    });
    modal.present();
  }






}
