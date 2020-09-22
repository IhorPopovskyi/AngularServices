import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteComponent } from "src/app/delete/delete.component";
import { Pokemon, PokemonsService } from "../services/pokemons.service";
import { AddFormComponent } from "./add-form/add-form.component";
import { EditFormComponent } from "./edit-form/edit-form.component";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.scss"],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(
    private pokemonsService: PokemonsService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonsService.fetchPokemons().subscribe((data) => {
      this.pokemons = this.pokemonsService.getDetails(data["results"]);
    });
  }

  addPokemon() {
    let dialogref = this.dialog.open(AddFormComponent);

    dialogref.afterClosed().subscribe((res) => {
      if (res) {
        this.pokemons.unshift(this.pokemonsService.pokemon);
      }
    });
  }

  editPokemon(pokemon) {
    EditFormComponent.pokemon = pokemon;

    let dialogref = this.dialog.open(EditFormComponent);

    dialogref.afterClosed().subscribe((res) => {
      if (res) {
        let index = this.pokemons.indexOf(pokemon);
        this.pokemons.splice(index, 1, EditFormComponent.pokemon);
      }
    });
  }

  deletePokemon(pokemon) {
    let dialogref = this.dialog.open(DeleteComponent);

    dialogref.afterClosed().subscribe((res) => {
      if (res) {
        this.pokemons = this.pokemons.filter(
          (item) => pokemon.id != item.id || pokemon.name != item.name
        );
      }
    });
  }
}
