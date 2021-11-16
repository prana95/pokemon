import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Pokemon';
import { PokemonsService } from '../pokemons.service';
import { PokemonsModule } from '../pokemons.module';

@Component({
  selector: 'app-pokenom-form',
  templateUrl: './pokenom-form.component.html',
  styleUrls: ['./pokenom-form.component.scss']
})
export class PokenomFormComponent implements OnInit {


  //variable
  @Input() pokemon!:Pokemon;//propriété d'entree du composant
  types?:Array<string> = [];
  constructor(private router:Router,private pokemonSevice:PokemonsService) { }

  ngOnInit(): void {
    this.types = this.pokemonSevice.getPokemonTypes();
  }
  /**
   * Determiner si le type passée en parametre appartient
   * ou non au pokemon en cours d'édition
   * @param type 
   * @returns boolean
   */

  hasType(type:string):boolean{
    const index = this.pokemon.types?.indexOf(type);
    //console.log('index: '+index);
    return (index !== -1) ? true:false; 
  }

  /**
   * Methode appeléé lorsque l'utilisateur ajouter ou retire un mdification
   * au pokemon en cours d'édition
   * @param $event 
   * @param type 
   */

  //$ c'est pour diff les evenement si on a cochez ou pas le case 
  selectType($event:any,type:string):void{
    const checked =$event.target.checked;
    if(checked){
      this.pokemon.types?.push(type);
    }
    else{
      const index = this.pokemon.types?.indexOf(type) ;
      if(index!==-1){
        this.pokemon.types?.splice(Number(index),1);
      }
    }
  }
  /**
   * Meethode appeler lors quele formulaire esst soumis
   */
  onSubmit():void{
    console.log('Submit form!');
    //const link = ['/pokemon',this.pokemon.id];
    //this.router.navigate(link);
    this.pokemonSevice.updatePokemon(this.pokemon)
    .subscribe(()=>this.goBack());
  }
  goBack():void{
    this.router.navigate(['/pokemon']);
  }

  //valide le nombre de type chaque pokemon
  /**
   * valide le nombre de type pour chaque pokemon
   * @param type 
   * @returns 
   */
  isTypesValid(type:string):boolean{
   // const length =  !=null ? this.pokemon.types.length : 0;
    if(this.pokemon.types !=undefined){
      if(this.pokemon.types.length === 1 && this.hasType(type)){
        return false;
      }
      if(this.pokemon.types.length >= 3 && !this.hasType(type)){
        return false;
      }
      return true;
    }
    return false;
      
  }
}
