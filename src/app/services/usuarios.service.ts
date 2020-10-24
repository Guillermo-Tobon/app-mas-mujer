import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { map } from  'rxjs/operators';
import { ResponseData } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public httpOptions:any = {}; 

  constructor( private http: HttpClient ) { 
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
  }


  /**
   * Método para consultar todos los usuarios
   */
  public getAllUsersServices = () =>{

    return this.http.get<ResponseData>(`${environment.URL_API}/usuarios`, this.httpOptions).pipe(
      map( data => data )
    ).toPromise();

  }



  /**
   * Método para consultar ususario por ID
   * @param idUser -> ID user 
   */
  public getUserPorIdService = ( idUser:any ) =>{
    
    return this.http.get<ResponseData>(`${environment.URL_API}/usuario/${idUser}`, this.httpOptions).pipe(
      map(data => data)
    ).toPromise();
  }



  /**
   * Método para guardar en BD la info del usuario
   * @param info -> Objeto que contiene la data del user a guardar
   */
  public insertUserService = (info:{}) =>{
    let json = {
          numIdentifica: info['num_identifica_us'],
          tipoIdentifica: info['tipo_identifica_us'],
          nombre: info['nombre_us'],
          direccion: info['direccion_us'],
          ciudad: info['ciudad_us'],
          departamento: info['departamento_us'],
          telefono: info['telefono_us'],
          correo: info['correo_us'],
          nomContacUno: info['nom_contacto_uno_us'],
          telContacUno: info['tel_contacto_uno_us'],
          nomContacDos: info['nom_contacto_dos_us'],
          telContacDos: info['tel_contacto_dos_us'],
          estado: 1
        }

    return this.http.post(`${environment.URL_API}/insertUsuario`, json, this.httpOptions).pipe(
      map( data => data )
    ).toPromise();
        
  }


  /**
   * Método para actualizar en BD la info del usuario
   * @param info -> Objeto con la info del usuario a actualizar
   */
  public updateUserById = (info:{}) =>{
    let json = {
      numIdentifica: info['num_identifica_us'],
      tipoIdentifica: info['tipo_identifica_us'],
      nombre: info['nombre_us'],
      direccion: info['direccion_us'],
      ciudad: info['ciudad_us'],
      departamento: info['departamento_us'],
      telefono: info['telefono_us'],
      correo: info['correo_us'],
      nomContacUno: info['nom_contacto_uno_us'],
      telContacUno: info['tel_contacto_uno_us'],
      nomContacDos: info['nom_contacto_dos_us'],
      telContacDos: info['tel_contacto_dos_us'],
      estado: 1
    }

    return this.http.post(`${environment.URL_API}/actualizarUsuario`, json, this.httpOptions).pipe(
      map( data => data )
    ).toPromise();
  }



}
