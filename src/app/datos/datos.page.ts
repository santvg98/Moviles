import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  ccSupervisor: string | null = ''
  infoSupervisor: Array<any> = []
  datos: Array<any> = []
  supervisor: string = ''
  date = new Date()
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ccSupervisor = this.activateRoute.snapshot.paramMap.get('cc')
    console.log("llego la cc: " + this.ccSupervisor)
    this.datoSupervisor()
    this.nombreSupervisor()
    this.cajeros()
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
    ]
    
  }


  nombreSupervisor() {
    for (var nom of this.infoSupervisor) {
      if (nom.cc === this.ccSupervisor) {
        this.supervisor = nom.nombre + '' + nom.apellido
      }
    }
  }  


  cajeros(){
    this.datos = [
      {
        nombre: "Andres",
        apellido: "pinilla",
        edad: 18,
        caja: 1
      },
      {
        nombre: "Luz Marina",
        apellido: "Casañas",
        edad: 47,
        caja: 2
      },
      {
        nombre: "Mariela",
        apellido: "Hernandez",
        edad: 87,
        caja: 3
      }
    ]
  }
  
}





