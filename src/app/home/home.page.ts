import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mySupervisor: any
  esValida: boolean = false
  ccSupervisor: string | null = ''
  cc2 = 1234567;
  cc3 = 7654321;
  

  constructor(private router: Router, private toastController: ToastController) { }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'La cédula ingresada no coincide.',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }
  

  
  ingresar() {
    console.log("CC:" + this.mySupervisor)
    if (this.mySupervisor == this.cc2 || this.mySupervisor == this.cc3) {
      this.router.navigate(['../datos', this.mySupervisor])
    }else{
        this.presentErrorToast();
      }
    
  }

  validarCedula() {
    const valida = /^[0-9]{7,10}$/;
    this.esValida = valida.test(this.mySupervisor);
  }

}
