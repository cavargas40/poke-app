import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon: any;

  public imageLoading: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  onImageLoad(event) {
    setTimeout(() => {
      this.imageLoading = true;
    }, 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.pokemon,
    });
  }
}
