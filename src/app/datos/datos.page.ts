import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VarGlobalesService } from '../service/var-globales.service';
import { ModalController } from '@ionic/angular';
import { InsertDatosPage } from './insert-datos/insert-datos.page';
import { ConexionService } from '../service/conexion.service';
import { subscribeOn } from 'rxjs';
import { Datos } from './models/datos';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html', 
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {
  nombreSupervisor: string | null = '';
  //datos: Array<any> = [];
  datos!:Datos[];
  show: { [key: number]: boolean } = {};
  date = new Date();
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });


  constructor(private activateRoute: ActivatedRoute, 
    private router: Router, 
    private varsGlobales: VarGlobalesService, 
    private modalCtrl: ModalController,
    private conexion: ConexionService) {}

  ngOnInit() {
    this.nombreSupervisor = this.varsGlobales.getNombre()
    console.log('llego la cc: ' + this.nombreSupervisor);
    this.cajeros();
  }

 cajeros(){
  this.conexion.consultaCajeros().subscribe(
    (data:any) =>(
      this.datos = data
    )
  )
 }
 /* cajeros() {
    this.datos = [
      {
        nombre: 'Nacho',
        apellido: 'lee',
        foto: '../../assets/img/nacho.jpg',
        pagina: '../../assets/nacho.html', 
      },
      {
        nombre: 'satoru ',
        apellido: 'gojo',
        foto: '../../assets/img/Gojo satoru cute♡.jpeg',
        pagina: '../../assets/gojo.html', 
      },
      {
        nombre: 'Hu Tao',
        apellido: '...',
        foto: '../../assets/img/hu,tao.jpeg',
        pagina: '../../assets/hutao.html', 
      },
    ];
  }*/ 

  
  onClick(i: number) {
    if (this.show[i]) {
      this.show[i] = false;
    } else {
      this.show[i] = true;
    }
  }

  
  redireccionar(url: string) {
    if (url) {
      window.location.href = url; 
    }
  }


  insert(){
     this.modalCtrl.create({
         component: InsertDatosPage
     })
     .then ((modal) =>{
      modal.present()
      return modal.onDidDismiss
     }
     )
  }
}



  
 





