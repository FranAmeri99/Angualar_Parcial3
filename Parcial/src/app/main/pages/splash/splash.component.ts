import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})

export class SplashComponent implements OnInit {
  
  imagenUrl: string = '../../assets/splash_vertical.png';

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit() {
    // Redirigir a la página principal después de 3 segundos
    setTimeout(() => {
      this._router.navigate(['main/listado']); // Reemplaza '/home' con la ruta de tu página principal
    }, 3000); // 3000 milisegundos = 3 segundos
  }
}