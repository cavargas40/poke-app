import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  baseUrl = 'http://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getAllPokemon(limit = 20, offset = 20) {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
