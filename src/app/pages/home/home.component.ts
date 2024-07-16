import { Component } from '@angular/core';
import { TopNavComponent } from '../../component/top-nav/top-nav.component';
import { ButtonComponent } from '../../component/button/button.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopNavComponent, ButtonComponent, SignupComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private router:Router) { }

  NavigateSong(){
    this.router.navigate(['song-card'])
  }

  NavigatePlaylist(){
    this.router.navigate(['./playlist'])
  }

  OnLogOut(){
    this.router.navigate([''])
  }

}
