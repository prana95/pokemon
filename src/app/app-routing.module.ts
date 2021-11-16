import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { PokenomEditComponent } from './pokemon/pokenom-edit/pokenom-edit.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "pokemon",component: ListPokemonComponent},
  {path: 'pokemon/edit/:id',component:PokenomEditComponent},
  {path:"pokemon/:id",component: DetailPokemonComponent},
  {path:'',redirectTo:'pokemon',pathMatch:'full'},
  // '' veut dire si il y a auccun composant/compoent càd le dossier pokemon (lui meme) on rédrige vers le page d'acceuil(càd on rédrige vers le component pokemon(dossier pokemon)) 
  {path:'**',component:PageNotFoundComponent}
  //** veut dire si c'est n'import que mots à part pokemon ou pokeman/:id on rédrige vers pagenotfound
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
