import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iasistencia } from '../pages/interfaces/interfaces';
import { Iasistencias } from '../pages/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { Iregistrar } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private httpClient: HttpClient) { }

  //implementamos peticion get 
  listarasistencias():Observable<Iasistencias>{
    return this.httpClient.get<Iasistencias>(`${environment.apiUrl}/asistencias`);
  }

  //implementamos peticion post
  crearasistencia(newasistencia:any):Observable<Iasistencia>{
    return this.httpClient.post<Iasistencias>(`${environment.apiUrl}/asistencias`,newasistencia);
  }

  crearregistrar(newregistrar:any):Observable<Iregistrar>{
    return this.httpClient.post<Iregistrar>(`${environment.apiUrl}/usuarios`,newregistrar);
  }

  



}
