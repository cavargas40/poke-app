import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  private pokemons: Array<any> = [];

  constructor(private pokeApiService: PokeapiService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeApiService.getAllPokemon().subscribe(({ results }) => {
      this.pokemons = results;
      this.pokemons.map(pokemon => pokemon['id'] = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))
      console.log(this.pokemons)
    })
  }
}
