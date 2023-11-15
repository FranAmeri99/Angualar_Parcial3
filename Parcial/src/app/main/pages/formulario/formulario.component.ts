import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiciosResourceService } from '../../resources/servicios-resource.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  implements OnInit{

  form!: FormGroup;
  submitted: boolean = false;   
  showInfo: boolean = false; 


  constructor(private _service: ServiciosResourceService, 
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute){}

  ngOnInit(): void {
    this.loadData();
    this.initForm();
  }

  showData(): void{
    this.submitted = true;
    console.log(this.form.value);
  }

  reset(): void{
    this.submitted = false;
    this.initForm();
  }

  back(): void{
    this.showInfo = false;
    this.reset();
  }


  agregarPersona(): void {}


  private loadData(): void{}
      


  private initForm(): void{

    this.form = this._fb.group({ cod_tipo_servicio: ['']},);

}


}
