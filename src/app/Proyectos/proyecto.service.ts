import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proyecto } from './proyecto'

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProyectoService {
    private proyectosUrl = 'localhost:8080/proyecto';

    constructor(private http : Http){
    }

    getProyectos(): Promise<Proyecto[]> {
      return this.http.get(`${this.proyectosUrl}/findall`).toPromise()
      .then(response => response.json().data as Proyecto[])
      .catch(this.handleError);
    }

    getProyectos2(): Promise<Proyecto[]>{
      return Promise.resolve(PROYECTOS)
    }
    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }


}

const PROYECTOS: Proyecto[]=[
  {"idn":7,
  "nombreproyecto":"Pruebas",
  "objetivogeneral":"Pruebas al crud",
  "fechainicial":"2017-04-20",
  "adtusuario":"admin",
  "adtfecha":"2017-04-20",
  "calificacion":"null",
  "justificacioncancelacion":"null",
  "justificacionsuspension":"null",
  "reconocimiento":"null",
  "estados":2,
  "modalidades":1,
  "tiposproyectos":3}
];
