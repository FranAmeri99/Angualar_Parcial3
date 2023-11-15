import { Component, OnInit } from '@angular/core';
import { ServiciosResourceService } from '../../resources/servicios-resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITemaServicio } from '../../models/i-tema-servicio';
import { IPersona } from '../../models/i-persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas!: IPersona[];

  constructor(private _service: ServiciosResourceService, 
    private _router: Router,
    private _route: ActivatedRoute){}


  ngOnInit(): void {
    


      this._service.getPersonas().subscribe({ next: (data: IPersona[]) => {
        this.personas = data;
        },
        error: (err) => {
          throw err;
        }
      });
    




    
  };

}



