import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokenom-edit',
  templateUrl: './pokenom-edit.component.html',
  styleUrls: ['./pokenom-edit.component.scss']
})
export class PokenomEditComponent implements OnInit {

  //variable
  singlePokemon: Pokemon=new Pokemon(); //ou singlePokemon?: Pokemon=null; 
  constructor(private route : ActivatedRoute,private pokemonService : PokemonsService) { }
  identifiant: number = 0;

  ngOnInit(): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    
    const id = this.route.snapshot.paramMap != null ? this.route.snapshot.paramMap.get('id') : 0;
    this.identifiant = id!= null ? +id : 0;
    this.pokemonService.getSinglePokemon(this.identifiant)
    .subscribe(pkm=>this.singlePokemon=pkm);
    console.log('vous avez sélectionné:',this.singlePokemon.name);
  }

}
