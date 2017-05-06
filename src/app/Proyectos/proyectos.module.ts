import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './proyectos.component';

@NgModule({
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    HttpModule
  ],
  declarations: [ProyectosComponent]
})
export class ProyectosModule { }
