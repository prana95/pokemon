import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/app/Pokemon';
import { LIST_POKEMONS } from 'src/app/shared/list.pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  
  //varaible
  identifiant: number = 0;
  listOfPokemon?: Pokemon[]=[];
  pokemonToDisplay?:Pokemon={};
  title?:"hello";
  constructor(private route:ActivatedRoute,private router : Router,private pokemonsService:PokemonsService) { }
  
  
  ngOnInit(): void {
    //Récuprer le paramètre de la route associée notre composant
    //Snapshot : Récuprer le paramètre de manière synchrone.
    const id = this.route.snapshot.paramMap != null ? this.route.snapshot.paramMap.get('id') : 0;
    this.identifiant = id!= null ? +id : 0;
    //console.log("id de pokemon"+this.identifiant)
    this.pokemonsService.getSinglePokemon(this.identifiant).subscribe(pkm=>this.pokemonToDisplay=pkm);
    /*this.listOfPokemon=LIST_POKEMONS;
    for(let i=0;i<this.listOfPokemon.length;i++){
      //Rechercher dans la list des pokemons; l'identifiantdu pokemon qui
      //correspond à l'identifant récupréré depuis l'url
      if(this.listOfPokemon[i].id == id){
        this.pokemonToDisplay = this.listOfPokemon[i];
        console.log(this.pokemonToDisplay);
      }
    }*/
  }

  //this.pokemonsService.getSinglePokemon(id);
  
  //revenir à la list des pokemon apre avoir consuler 
  goBack():void{
    this.router.navigate(['/pokemon']);
  }

  editerPokemon(pokemonToEdit: Pokemon):void{
    //const link =['pokemon/edit',pokemonToEdit.id];//ou 
    //avec   -> c nouveau Angualr 7 je pense
    //console.log("je suis la")
    const link = [`pokemon/edit/${pokemonToEdit.id}`] ;
    this.router.navigate(link);
  }
  deletePokemon(pokemonToDelete:Pokemon):void{
    console.log('deletePokemon')
    this.pokemonsService.deleteSinglePokemon(pokemonToDelete).subscribe(()=>this.goBack());
    this.goBack()
  }
}
