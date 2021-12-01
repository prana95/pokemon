import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { PokenomEditComponent } from './pokemon/pokenom-edit/pokenom-edit.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

/*const routes: Routes = [
  {path: "pokemon",component: ListPokemonComponent},
  {path: 'pokemon/edit/:id',component:PokenomEditComponent,canActivate:[AuthGuardService]},
  {path:"pokemon/:id",component: DetailPokemonComponent},
  {path:'',redirectTo:'pokemon',pathMatch:'full'},
  // '' veut dire si il y a auccun composant/compoent càd le dossier pokemon (lui meme) on rédrige vers le page d'acceuil(càd on rédrige vers le component pokemon(dossier pokemon)) 
  {path:'**',component:PageNotFoundComponent}
  //** veut dire si c'est n'import que mots à part pokemon ou pokeman/:id on rédrige vers pagenotfound
];*/

const pokemonsRoutes:Routes =[
  {path:'',redirectTo:'pokemon',pathMatch:'full'},
  {path: 'login',component:LoginComponent},
      
  {
    path: 'pokemon',
    canActivate:[AuthGuardService],
    children:[
     {path: '',component:ListPokemonComponent},
      {path: 'edit/:id',component:PokenomEditComponent,canActivate:[AuthGuardService]},
      {path: ':id',component:DetailPokemonComponent},
      
      {path:'**',component:PageNotFoundComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(pokemonsRoutes)],//à la place de pokemonsRoutes il y avais routes changer pour Authentification
  exports: [RouterModule]
})
export class AppRoutingModule {}
