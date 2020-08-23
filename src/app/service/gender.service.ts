
import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  url:" https://aqueous-spire-30568.herokuapp.com/";


  

  genders = [
    {
      id: "GNovela",
      name: "Novela"
    },
    {
      id: "GTerror",
      name: "Terror"
    }
  ];
  constructor(private http: HttpClient) { }
  listaGeneros(){
    return this.genders;
  }
}
