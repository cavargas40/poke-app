import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss']
})
export class PokeCardComponent implements OnInit {

  @Input() pokemon: any;

  public imageLoading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onImageLoad(event) {
    setTimeout(() => {
      this.imageLoading = true;
    }, 0);
  }

}
