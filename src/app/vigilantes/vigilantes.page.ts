import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vigilantes',
  templateUrl: './vigilantes.page.html',
  styleUrls: ['./vigilantes.page.scss'],
})
export class VigilantesPage implements OnInit {
  datos: Array<any> = [];
  show: { [key: number]: boolean } = {};

  constructor(private ActivatedRoute: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.vigilantes();
  }

  vigilantes()
  {
    this.datos =
      [
      
        {
          nombre: "Max",
          apellido: "Velez",
          edad: 21,
          cajero: 1,
        },
          
        {
          nombre: "Marina",
          apellido: "Restrepo",
          edad: 38,
          cajero: 2,
        },
      
        {
          nombre: "Ti",
          apellido: "Po",
          edad: 60,
          cajero: 3,
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

}

