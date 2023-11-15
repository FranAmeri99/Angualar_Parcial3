import { Injectable } from '@angular/core';
import { IResourceMethodObservable, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';

import { environment } from 'src/environments/environment';
import { ITemaServicio } from '../models/i-tema-servicio';
import { ISugerencia } from '../models/i-sugerencia';
import { ITipoServicio } from '../models/i-tipo-servicio';
import { IPersona } from '../models/i-persona';

@Injectable()
@ResourceParams({
  pathPrefix: `${environment.apiUrl}`
})
export class ServiciosResourceService extends Resource {

  constructor(handler?: ResourceHandler) {
    super(handler);
  }
/*
  @ResourceAction({
    path: '/servicios/temas_servicios',
    method: ResourceRequestMethod.Post    
  })
  getTemasServicios!: IResourceMethodObservable<FormData,ITemaServicio[]>;

  @ResourceAction({
    path: '/servicios/insertar_sugerencia',
    method: ResourceRequestMethod.Put    
  })
  insSugerencia!: IResourceMethodObservable<{sugerencia?:ISugerencia},ISugerencia>;

*/

@ResourceAction({
  path: '/personas/listado',
  method: ResourceRequestMethod.Get    
})
getPersonas!: IResourceMethodObservable<{persona?:IPersona},IPersona[]>;
  
}
