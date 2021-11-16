import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokenomFormComponent } from './pokenom-form/pokenom-form.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { PokenomEditComponent } from './pokenom-edit/pokenom-edit.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailPokemonComponent,
    PokenomEditComponent,
    PokenomFormComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ]
})
export class PokemonsModule { }
