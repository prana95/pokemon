import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { LIST_POKEMONS } from './list.pokemons';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() { }
  
  createDb(){
    console.log('creation de la BDD');
    const pokemon=LIST_POKEMONS;
    console.log('InMomeryDataService pokemon : ', pokemon); 
    return { pokemon };
  }
}
