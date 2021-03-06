import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getAllPokemon(limit = 20, offset = 20) {
    return this.http.get<any>(
      `${this.baseUrl}?limit=${limit}&offset=${offset}`
    );
  }

  getPokemonById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getPokemonInfo(url: string) {
    const operator = 10;
    return this.http.get<any>(url).pipe(
      map((res) => {
        const abilities = res.abilities
          .map(({ ability }) => Utils.capitalize(ability.name))
          .join(', ');
        const types = res.types
          .map(({ type }) => Utils.capitalize(type.name))
          .join(', ');

        res['formatted'] = {
          weight: `${res.weight / operator} kg`,
          height: `${res.height * operator} cm`,
          abilities,
          types,
        };
        return res;
      })
    );
  }
}
