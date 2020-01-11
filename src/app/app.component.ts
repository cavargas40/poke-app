import { Component, OnInit } from '@angular/core';
import { PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'poke-app';
  private pokemons: Array<any> = [];

  constructor(private pokeApiService: PokeapiService) {
  
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon(){
    this.pokeApiService.getAllPokemon().subscribe(({ results }) => {
      this.pokemons = results;
      this.pokemons.map(pokemon => pokemon['id'] = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))
      console.log(this.pokemons)
    })
  }
}
