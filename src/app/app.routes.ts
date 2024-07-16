import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { SongCardComponent } from './component/song-card/song-card.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';

export const routes: Routes = [
    {
        path:'home',component:HomeComponent
    },
    {
        path:'signup',component:SignupComponent
    },
    {
        path:'',component:LoginComponent
    },
    {
        path:'song-card',component:SongCardComponent
        
    },
    {
        path:'song-card',component:SongCardComponent
    },
    {
        path:'playlist',component:PlaylistComponent
    }
];
