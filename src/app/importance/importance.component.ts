import { Component } from '@angular/core';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { AudioPlayerComponent } from '../audio-player/audio-player.component';

@Component({
  imports: [VideoPlayerComponent, AudioPlayerComponent],
  selector: 'app-importance',
  standalone: true,
  styleUrl: './importance.component.css',
  templateUrl: './importance.component.html',
})
export class ImportanceComponent {}
