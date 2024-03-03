import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-vigilante',
  templateUrl: './vigilante.page.html',
  styleUrls: ['./vigilante.page.scss'],
})
export class VigilantePage implements OnInit {
  nombreSupervisor: string | null = '';
  datos: Array<any> = [];
  show: { [key: number]: boolean } = {};
  date = new Date();
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  constructor(private activateRoute: ActivatedRoute) {} 

  ngOnInit() {
    this.nombreSupervisor = this.activateRoute.snapshot.paramMap.get('nombre');
    console.log('llego la cc: ' + this.nombreSupervisor);

    this.Vigilantes();
  }

  Vigilantes() {
    this.datos = [
      {
        nombre: 'Red',
        apellido: 'lapix',
        foto: '../../assets/img/images.jpeg',
        pagina: '../../assets/nacho.html',
      },
      {
        nombre: 'xiao',
        apellido: 'fhen',
        foto: '../../assets/img/Sin título.jpeg',
        pagina: '../../assets/gojo.html',
      },
      {
        nombre: 'makoto',
        apellido: 'riden',
        foto: '../../assets/img/616.jpeg',
        pagina: '../../assets/hutao.html',
      },
    ];

    this.datos.forEach((_, index) => {
      this.show[index] = false;
    });
  }

  onClick(i: number) {
    if (this.show[i]) {
      this.show[i] = false;
    } else {
      this.show[i] = true;
    }
  }

  redirecciona(url: string) { 
    if (url) {
      window.location.href = url; 
    }
  }
}





  



