import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PokemonsRoutingModule } from "./pokemons-routing.module";
import { PokemonsComponent } from "./pokemons.component";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [PokemonsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PokemonsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class PokemonsModule {}
