import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ccSupervisor: any;
  esValida: boolean = false;
  supervisor: string = '';
  infoSupervisor: Array<any> = [];

  constructor(private router: Router, private toastController: ToastController) {
    this.datoSupervisor();
  }

  ionViewWillEnter() {
    this.ccSupervisor = '';
    this.supervisor = '';
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log(' ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log(' ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log(' ionViewDidLeave');
  }

  async presentErrorToast() {
    const toast = await this.toastController.create({
      message: 'La cédula ingresada no coincide.',
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }

  ingresar() {
    this.validarCedula();

    if (this.ccSupervisor > 0 && this.supervisor.length > 0 && this.esValida) {
      this.nombreSupervisor(this.ccSupervisor);
      this.router.navigate(['/datos', this.supervisor]);
    } else {
      this.presentErrorToast();
    }
  }

  validarCedula() {
    const valida = /^[0-9]{7,10}$/;
    this.esValida = valida.test(this.ccSupervisor);
  }

  datoSupervisor() {
    this.infoSupervisor = [
      {
        cc: "1234567",
        nombre: "Santiago",
        apellido: "Velez"
      },
      {
        cc: "7654321",
        nombre: "Juan",
        apellido: "Perez"
      }
    ];
  }

  nombreSupervisor(datos: string) {
    for (var nom of this.infoSupervisor) {
      if (nom.cc.toString() === datos.toString()) {
        this.supervisor = nom.nombre + ' ' + nom.apellido;
        break;
      }
    }
  }
}


