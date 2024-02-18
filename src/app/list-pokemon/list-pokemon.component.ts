import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PageNotFoundComponent],
  templateUrl: './list-pokemon.component.html',
  
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  
  constructor(private router: Router){} 
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
