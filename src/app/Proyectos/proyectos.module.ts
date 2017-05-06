import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';
import { ProyectoService }         from './proyecto.service';

@NgModule({
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    HttpModule
  ],
  declarations: [ProyectosComponent],
  providers: [ProyectoService]
})
export class ProyectosModule { }
