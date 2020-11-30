import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LeftNavigationBarComponent } from './left-navigation-bar/left-navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicReproductorComponent } from './music-reproductor/music-reproductor.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailSongComponent } from './detail-song/detail-song.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { DetailPodcastComponent } from './detail-podcast/detail-podcast.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { ResultadoBusquedaComponent } from './resultado-busqueda/resultado-busqueda.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BusquedaComponent,
    LandingPageComponent,
    LandingNavbarComponent,
    LeftNavigationBarComponent,
    HomeComponent,
    MusicReproductorComponent,
    NavBarComponent,
    DetailSongComponent,
    DetailPlaylistComponent,
    DetailPodcastComponent,
    PlaylistItemComponent,
    ResultadoBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
