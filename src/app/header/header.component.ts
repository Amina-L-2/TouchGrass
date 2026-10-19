import { Component } from '@angular/core';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  imports: [PokemonComponent, NavComponent],
  selector: 'app-header',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
