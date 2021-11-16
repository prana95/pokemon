import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {  debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})

export class SearchPokemonComponent implements OnInit {

  //variables
  //Observable
  private searchTerms = new Subject()
  pokemons$?: Observable<Pokemon[]>
  constructor(private router:Router,private pokemonsService:PokemonsService) { }
  
  ngOnInit(): void {
    //var term:string
    this.pokemons$ =this.searchTerms.pipe(
      
      //attendre 300ms de pause entre chaque requete
      debounceTime(30),
      //ignorer la list des résultat correspondant aux termes de la recherche
      // ca annule et rejette les termes de recherche et retournerseulement le plus recent. 
      distinctUntilChanged(),
      switchMap((term)=>this.pokemonsService.searchPokemons(String(term))),
    );
  }
  //Ajouter un terme de recherche dans le flux de l'observable searchTerms'
  search(terms:string):void{
    //Stocker les recherches successives de l'utilisateur
    this.searchTerms.next(terms)
  }
  gotoDetail(pokemon: Pokemon): void {
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}

}
