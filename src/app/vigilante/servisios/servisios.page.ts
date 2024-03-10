import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-servisios',
  templateUrl: './servisios.page.html',
  styleUrls: ['./servisios.page.scss'],
})
export class Exportar implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  form = new FormGroup({
    cedulav: new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(10)
    ]) ,
    numerov: new FormControl('',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
      ]) 
  })}
  


