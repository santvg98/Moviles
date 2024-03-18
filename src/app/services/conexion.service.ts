import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http:HttpClient) { }

  url = 'http://127.0.0.1:80'

  consultaSupervisor() {
    return this.http.get(this.url+'/consultaSupervisor')
  }

  consultaCajeros() {
    return this.http.get(this.url+'/consultaCajero')
  }
}
