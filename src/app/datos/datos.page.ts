import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  nombreSupervisor: string | null = ''

  datos: Array<any> = []
  show:{[key: number]: boolean} = {}
  
  date = new Date()
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nombreSupervisor = this.activateRoute.snapshot.paramMap.get('nombre')
    console.log("llego la cc: " + this.nombreSupervisor)
    this.cajeros()
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
  
  onClick(i: number) {
    if (this.show[i])
    {
      this.show[i]= false
    } else
    {
      this.show[i]= true
    }
  }
}





