import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Pokemon {
  id?: number;
  name: string;
  height: number;
  weight: number;
  img?: string;
  experience: string;
}

@Injectable({
  providedIn: "root",
})
export class PokemonsService {
  pokemon;

  constructor(private http: HttpClient) {}

  fetchPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
  }

  getDetails(pokemons) {
    for (let i: any = 0; i < pokemons.length; i++) {
      this.http.get<any>(pokemons[i]["url"]).subscribe((res) => {
        pokemons.find((el) => el["name"] === res["name"]).id = res.id;
        pokemons.find((el) => el["name"] === res["name"]).height = res.height;
        pokemons.find((el) => el["name"] === res["name"]).weight = res.weight;
        pokemons.find((el) => el["name"] === res["name"]).experience =
          res.base_experience;
        pokemons.find((el) => el["name"] === res["name"]).img =
          res.sprites.other.dream_world.front_default;
      });
    }
    return pokemons;
  }
}
