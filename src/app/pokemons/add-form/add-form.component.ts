import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { PokemonsService } from "src/app/services/pokemons.service";

@Component({
  selector: "app-add-form",
  templateUrl: "./add-form.component.html",
  styleUrls: ["./add-form.component.scss"],
})
export class AddFormComponent implements OnInit {
  form: FormGroup;

  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(""),
      height: new FormControl(""),
      weight: new FormControl(""),
      experience: new FormControl(""),
      img: new FormControl(""),
    });
  }

  submit() {
    this.pokemonsService.pokemon = this.form.value;
  }
}
