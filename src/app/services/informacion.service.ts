import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  public httpOptions:any = {}; 

  constructor( private http: HttpClient ) { 

    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
  }




  /**
   * Método GET para consultar la información de interés
   */
  public getInformacionService(){
    return this.http.get('../assets/data/informacion.json',  this.httpOptions);
  }




}
