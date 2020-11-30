import { Component, OnInit } from '@angular/core';
import { faCoffee, faCompactDisc, faHeadphones, faMicrophone, faMusic, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-navigation-bar',
  templateUrl: './left-navigation-bar.component.html',
  styleUrls: ['./left-navigation-bar.component.css']
})
export class LeftNavigationBarComponent implements OnInit {

  constructor() { }
  faMusic = faMusic;
  faPodcast = faMicrophone;
  faPlaylist = faHeadphones;
  faAlbum = faCompactDisc;
  faArtist = faUser;

  ngOnInit(): void {
  }

  
}
