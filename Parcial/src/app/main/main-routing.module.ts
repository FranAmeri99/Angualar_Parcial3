import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { SplashComponent } from './pages/splash/splash.component';


const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', component: SplashComponent },
    { path: 'listado', component: ListadoComponent },
    { path: 'formulario', component: FormularioComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
