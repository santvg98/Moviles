import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-datos',
  templateUrl: './insert-datos.page.html',
  styleUrls: ['./insert-datos.page.scss'],
})
export class InsertDatosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    cedulaCajero: new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
    ]) 
  })
}
