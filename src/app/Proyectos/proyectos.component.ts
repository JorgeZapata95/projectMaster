import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';
import { ProyectoService } from './proyecto.service';

import { Router }   from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

 /** export class Proyecto {
    idn: number;
    nombreproyecto: string;
    objetivogeneral: string;
    fechainicial: string;
    calificacion: string;
    justificacioncancelacion: string;
    justificacionsuspension: string;
    adtusuario: string;
    adtfecha: string;
    reconocimiento: string;
    estados: number;
    modalidades: number;
    tiposproyectos: number;
  }
*/

export class ProyectosComponent implements OnInit {
   proyectos: Proyecto[];
   mensajeError: string; 
  constructor(private proyectoService: ProyectoService, private router: Router) { }

    getProyectos() {
       this.proyectoService.getProyectos2().subscribe(proyectos => this.proyectos = proyectos,
       error => this.mensajeError = <any>error);
    }

    ngOnInit(): void {
    this.getProyectos();
  }

  
  
}
