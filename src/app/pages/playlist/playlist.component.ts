import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [],
  templateUrl: './playlist.component.html',
  styleUrl: './playlist.component.css'
})
export class PlaylistComponent implements AfterViewInit {
  constructor(private router: Router) { }

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

  




  GoHome() {
    this.router.navigate(['home'])
  }
}
