import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseInformacion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  public httpOptions:any = {}; 

  constructor( private http: HttpClient ) { 

    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
  }




  /**
   * Método GET para consultar los artículos de información
   */
  public getInformacionService = () =>{
    return this.http.get<ResponseInformacion>(`${environment.URL_API}/informacion`,  this.httpOptions).pipe(
      map( data => data )
    ).toPromise();
  }





}
