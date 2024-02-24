import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [CommonModule,ListPokemonComponent,BorderCardDirective,PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent  implements OnInit{

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokemonService : PokemonService,
    ) { }

  ngOnInit(): void {
    
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemons']);
  }
}
