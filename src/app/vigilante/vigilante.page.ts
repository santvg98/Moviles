import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Exportar } from './servisios/servisios.page';
import { ConexionService } from '../service/conexion.service';
import { Datos } from './model/vigia';
import { subscribeOn } from 'rxjs';
import { VarGlobalesService } from '../service/var-globales.service';

@Component({
  selector: 'app-vigilante',
  templateUrl: './vigilante.page.html',
  styleUrls: ['./vigilante.page.scss'],
})
export class VigilantePage implements OnInit {
  nombreSupervisor: string | null = '';
  datos!:Datos[];
  show: { [key: number]: boolean } = {};
  date = new Date();
  fecha = this.date.toLocaleDateString('es-CO', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  constructor(private activateRoute: ActivatedRoute,
    private modalCtrl: ModalController,
    private conexion: ConexionService,
    private router: Router, 
    private varsGlobales: VarGlobalesService
    ) {} 

    ngOnInit() {
      this.nombreSupervisor = this.activateRoute.snapshot.paramMap.get('nombre');
      this.vigilantes(); // Llama al método para obtener los datos
      // console.log('llego la cc: ' + this.datos); // No necesitas esto aquí
    }
    

  vigilantes(){
      this.conexion.consultaVigilante().subscribe(
        (data:any) =>(
          this.datos = data
        
        )
      )
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
insert(){
  this.modalCtrl.create({
      component: Exportar
  })
  .then ((modal) =>{
   modal.present()
   return modal.onDidDismiss
  }
  )
}
}





  



