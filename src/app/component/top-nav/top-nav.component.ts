import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  
  constructor( private router:Router){

  }
  

  ngOnInit(): void {
      
  }

  onLogin(){
    this.router.navigate(['/login']);
  }

  onSignUp(){
    this.router.navigate(['/signup']);
  }


}
