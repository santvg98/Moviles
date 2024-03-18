import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VarGlobalesService {
  
  nombre: string = ''

  constructor() { }

  setNombre(nombre: string){
    this.nombre = nombre
  }

  getNombre(): string{
    return this.nombre
  }

}
