import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PokemonsService } from "../../services/pokemons.service";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  styleUrls: ["./edit-form.component.scss"],
})
export class EditFormComponent implements OnInit {
  form: FormGroup;
  static item: any;
  static pokemon: any;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(EditFormComponent.pokemon["name"]),
      height: new FormControl(EditFormComponent.pokemon.height),
      weight: new FormControl(EditFormComponent.pokemon.weight),
      experience: new FormControl(EditFormComponent.pokemon.experience),
      img: new FormControl(EditFormComponent.pokemon.img),
    });
  }

  submit() {
    EditFormComponent.pokemon = this.form.value;
  }
}
