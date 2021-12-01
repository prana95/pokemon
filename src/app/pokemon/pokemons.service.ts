import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap,catchError } from 'rxjs/operators';
import { Pokemon } from '../Pokemon';
import { LIST_POKEMONS } from '../shared/list.pokemons';
import { PokemonsModule } from './pokemons.module';
import {enableProdMode} from '@angular/core';
enableProdMode();



@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }
  //varaible
  private pokemonsUrl ='api/pokemon';
  
  getListPokemons():Observable<Pokemon[]>{

    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(()=>console.log('fetched list of Pokemon ')),
      catchError(this.handleError('getListPokemons',[]))
    );
  }

  private handleError<T>(operation= 'operation', result?: T) {
    // T: désigne le fait de typer un type en lui même
    // Renvoyer le bon type de la méthode qui a levé l'erreur.
    // operation: le nom de la méthode qui a causé l'erreur
    return (error: any): Observable<T> => {
     console.log(error);
     console.log(`${operation} failed: ${error.message}`);  
     
     // Of: Permet de transformer les données passées en paramètres en un observable tt simplement.
     return of ( result as T );
    };
  }

  getSinglePokemon(id:number):Observable<Pokemon>{
    
    const url =`${this.pokemonsUrl}/${id}`; //Syntaxe ES6
    console.log('url: '+url+ "id:"+`${id}`+ "pokemon:"+`${this.pokemonsUrl}`)
    return this.http.get<Pokemon>(url).pipe(
      tap(_=>console.log(`Fetched Pokemon id = ${id}`)),
      catchError(this.handleError<Pokemon>(`Get Pokemonid=${id}`))
    );
    /*const listPkm =this.getListPokemons();
    let pokemon = new Pokemon();
    for(let i=0;i<listPkm.length;i++) {
      if(id === listPkm[i].id){
        pokemon = listPkm[i];
        return listPkm[i];
      }
    }
    return pokemon;*/
  }
  deleteSinglePokemon(pokemon : Pokemon):Observable<Pokemon>{
    console.log('deleteSinglePokemon');
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers :new HttpHeaders({'Content-Type':'application/json'})
    }
    console.log(url)
    return this.http.delete<Pokemon>(url, httpOptions).pipe(
      tap(() => console.log(`Delete Pokemon id=${pokemon.id} `)),
      catchError(this.handleError<any>(`error: deleteSinglePokemon id = ${pokemon.id}`))
    );
  }
  getPokemonTypes():string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
  }
  updatePokemon(pokemon:Pokemon):Observable<Pokemon>{
    //on declare une entete pour singler que le format du corp de la réquete est du json
    const httpOptions = {
    headers :new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.put(this.pokemonsUrl,pokemon,httpOptions).pipe(
    tap(_=> console.log(`Update Pokemon id=${pokemon.id} `)),
    catchError(this.handleError<any>('update Pokemon'))
    );
  }

  searchPokemons(term:string):Observable<Pokemon[]>{
    //on testsi l'utilisateur ,'a pas asisi un terme vide.
    //dans ce cas, on n'a pas besoin d'envoyer la réquete
    //Nous renvoyons un tavleau vide sous forme d'un observable gravce à l'operateur of 
    if(!term.trim()){
      return of ([])
    }
    
    //Envoyer une requete get via l'observavble 
    //url spécifique mis en place avec notre API simulée qui renvoie tous les pokemons
    //dont la propritété nom contient ou égale au terme de la recherche.
    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(()=>console.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>('searchPokemon',[]))
      );
  }
}
