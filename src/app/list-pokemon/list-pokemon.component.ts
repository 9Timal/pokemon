import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from '../detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

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

  pokemonList: Pokemon[] ;
  
  constructor(
    private router: Router,
    private pokemonService: PokemonService,
  ){}

  ngOnInit() {
    this.pokemonList = this.pokemonService.getPOkemonList();

  }
  
  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon',pokemon.id]);
  }
}
