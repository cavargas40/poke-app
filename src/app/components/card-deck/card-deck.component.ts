import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  public pokemons: Array<any> = [];
  public length: number = 0;
  public pageSize: number = 10;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  private offset: number = 0;

  // MatPaginator Output
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  constructor(private pokeApiService: PokeapiService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokeApiService.getAllPokemon(this.pageSize, this.offset).subscribe(({ count, results }) => {
      this.pokemons = results;
      this.pokemons.map(pokemon => pokemon['id'] = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', ''))
      this.length = count;
    })
  }

  paginate(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.offset = (event.pageIndex) * event.pageSize;
    this.getPokemon();

    return this.pageEvent;
  }
}
