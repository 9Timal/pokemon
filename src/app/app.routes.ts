import { Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent},
    { path: 'pokemon/:id', component: DetailPokemonComponent},
    { path: '', redirectTo: 'pokemons',pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent},
];

