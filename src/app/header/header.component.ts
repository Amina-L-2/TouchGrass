import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  imports: [PokemonComponent],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
