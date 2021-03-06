import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PokeCardComponent } from "./components/card-deck/poke-card/poke-card.component";
import { PokeapiService } from "./services/pokeapi.service";
import { CardDeckComponent } from "./components/card-deck/card-deck.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    CardDeckComponent,
    SpinnerComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
