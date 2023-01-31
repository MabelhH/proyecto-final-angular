import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]

  
})
export class CoponentesModule { }
