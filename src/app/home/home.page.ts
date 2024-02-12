import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mySupervisor: any
  esValida: boolean = false

  constructor(private router: Router) { }
  
  ingresar() {
    console.log("CC:" + this.mySupervisor)
    if (this.mySupervisor > 0) {
      this.router.navigate(['../datos', this.mySupervisor])
    }
  }

  validarCedula() {
    const valida = /^[0-9]{7,10}$/;
    this.esValida = valida.test(this.mySupervisor);
  }

}
