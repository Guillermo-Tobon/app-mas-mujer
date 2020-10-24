import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResponseOrienta } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrientacionService {

  public httpOptions:any = {}; 
  public arrayOrienta: any[] = []; 

  constructor( private http: HttpClient ) { 
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}) };
  }


  /**
   * Método para obtener la orientación por ID
   * @param vio -> Id tipo de violencia
   * @param agre -> Id tipo de agresor
   */
  public getOrientacionById = (vio:any, agre:any) =>{
    return this.http.get<ResponseOrienta>(`${environment.URL_API}/orientacion/${vio}/${agre}`, this.httpOptions).pipe(
      map( data => data )
    ).toPromise();
  }


  /**
   * Método para regresar el array con la info de orietación
   * @param array -> Array con la info de orientación
   */
  public getResultOrientacion = (array:[]) =>{
    return this.arrayOrienta = array;
  }


}
