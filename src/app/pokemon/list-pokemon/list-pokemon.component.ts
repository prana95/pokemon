import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/Pokemon';
import { LIST_POKEMONS } from 'src/app/shared/list.pokemons';
//import { LIST_POKEMONS } from 'src/app/shared/list.pokemons'; on a plus besoin de ca 
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {
  //Varaiable
  pokemons?:Pokemon[]=[];//il faut mettre le import ctrl+space
  constructor(private router:Router,private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    //this.pokemons=LIST_POKEMONS;
    this.pokemonsService.getListPokemons()
    .subscribe(listPkm=>
      {console.log('list: ', listPkm)
       // this.pokemons =listPkm
       this.pokemons =listPkm;
      }
      );
  }
  selectPokemon(pokemon:Pokemon):void{
    //alert ('VOus avez sélectioné:' + pokemon.name);
    //Passer en paramètre l'url de la redirectoin +les paramètres éventueles de la route.
    const link = ['/pokemon', pokemon.id]
    this.router.navigate(link);
  }

}
