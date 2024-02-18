import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule,ListPokemonComponent,BorderCardDirective,PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent  implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    
    if(pokemonId) {
      this.pokemon = this.pokemonList.find(pokemon =>pokemon.id == +pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
