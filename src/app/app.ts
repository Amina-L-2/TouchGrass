import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TouchGrassComponent } from './touch-grass/touch-grass.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  imports: [HeaderComponent, TouchGrassComponent, FooterComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tailiwndcss');
}
