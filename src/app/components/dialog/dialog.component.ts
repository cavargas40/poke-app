import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  public imageLoading: boolean = false;
  public pokemon: any;
  public isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pokeApiService: PokeapiService
  ) {}

  ngOnInit(): void {
    this.getPokemonInfo();
  }

  onImageLoad(event: any) {
    setTimeout(() => {
      this.imageLoading = true;
    }, 0);
  }

  getPokemonInfo() {
    this.isLoading = true;
    this.pokeApiService.getPokemonInfo(this.data.url).subscribe((res) => {
      this.pokemon = res;
      this.isLoading = false;
    });
  }

}
