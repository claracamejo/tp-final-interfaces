import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { DetailPodcastComponent } from './detail-podcast/detail-podcast.component';
import { DetailSongComponent } from './detail-song/detail-song.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing', component: LandingPageComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'song/detail', component: DetailSongComponent
  },
  {
    path: 'playlist/detail', component: DetailPlaylistComponent
  },
  {
    path: 'podcast/detail', component: DetailPodcastComponent
  },
  {
    path: 'buscar', component: BusquedaComponent
  },
  {
    path: 'resultado', component: ResultadoBusquedaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
