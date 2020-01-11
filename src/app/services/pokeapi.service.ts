import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  baseUrl = 'http://pokeapi.co/api/v2/pokemon/'; 

  constructor(private http: HttpClient) { }

  getAllPokemon(){
    return this.http.get<any>(`${this.baseUrl}?limit=800`);
  }

}
