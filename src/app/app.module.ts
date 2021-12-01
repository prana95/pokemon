import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PokemonsModule } from './pokemon/pokemons.module';
import { PokemonsService } from './pokemon/pokemons.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
//import { LoginComponent } from './login/login.component';
//import { PokenomFormComponent } from './pokemon/pokenom-form/pokenom-form.component';


@NgModule({
  declarations: [
    AppComponent
    //LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokemonsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false})// Le format des données renvoyées par l'API
  ],
  providers: [
    PokemonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
