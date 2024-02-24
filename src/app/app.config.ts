import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';


export const appConfig: ApplicationConfig = {
  providers: [ 
    FormsModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    provideRouter(routes),
    provideClientHydration(),
    PageNotFoundComponent,
  ],
  
};
