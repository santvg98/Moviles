import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html', 
  styleUrls: ['./datos.page.scss'],

})
export class DatosPage implements OnInit {
  nombreSupervisor: string | null = '';
  datos: Array<any> = [];
  show: { [key: number]: boolean } = {};
  date = new Date();
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  constructor(private activateRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.nombreSupervisor = this.activateRoute.snapshot.paramMap.get('nombre');
    console.log('llego la cc: ' + this.nombreSupervisor);
    this.cajeros();
  }

  cajeros() {
    this.datos = [
      {
        nombre: 'Nacho',
        apellido: 'lee',
        edad: 18,
        caja: 1,
        foto: '../../assets/img/nacho.jpg',
        pagina: '../../assets/nacho.html',
      },
      {
        nombre: 'satoru ',
        apellido: 'gojo',
        foto: '../../assets/img/Gojo satoru cute♡.jpeg',
        pagina:   '../../assets/gojo.html',
      },
      {
        nombre: 'Hu Tao',
        apellido: '...',
        foto: '../../assets/img/hu,tao.jpeg',
        pagina: '../../assets/hutao.html',
      },
    ];
  }

  onClick(i: number) {
    if (this.show[i]) {
      this.show[i] = false;
    } else {
      this.show[i] = true;
    }
  }

  redireccionar(url: string) {
    if (url) {
      window.open(url, '_blank'); 
    }
  }
}





