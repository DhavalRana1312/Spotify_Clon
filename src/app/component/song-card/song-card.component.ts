import { AfterViewInit, Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song-card',
  standalone: true,
  imports: [],
  templateUrl: './song-card.component.html',
  styleUrl: './song-card.component.css'
})
export class SongCardComponent implements AfterViewInit {
constructor(private router:Router){}

ngAfterViewInit(): void {
  // Get all audio elements
  const audioElements = document.querySelectorAll('audio');
  // Add event listener to each audio element
  audioElements.forEach(audio => {
    audio.addEventListener('play', () => {
      // Pause all other audio elements
      audioElements.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });
}

GoHome(){
  this.router.navigate(['home'])
}
}
