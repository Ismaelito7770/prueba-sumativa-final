import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TecnicoEmpresaService {
  backend = environment.backend+"/profesional";
  
  constructor(private http: HttpClient) { }

  obtenerProfesionales(){
    return this.http.get(`${this.backend}/obtener-profesionales`);
  }

}

