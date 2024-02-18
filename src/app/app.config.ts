import { ApplicationConfig, NgModule } from '@angular/core';
import { RouterModule, provideRouter } from '@angular/router';
import { PokemonModule } from './pokemon.config';
import { provideClientHydration } from '@angular/platform-browser';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [ 
    PokemonModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    provideRouter(routes),
    provideClientHydration(),
    PageNotFoundComponent,
  ],
};
