import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosResourceService } from './resources/servicios-resource.service';
import { SplashComponent } from './pages/splash/splash.component';



@NgModule({
  declarations: [
    MainComponent,
    FormularioComponent,
    ListadoComponent,
    SplashComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ServiciosResourceService
  ]
})
export class MainModule { }
