import { Component, OnInit } from '@angular/core';
import { faEllipsisH, faHeart, faList, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../detail-playlist/Song';

@Component({
  selector: 'app-favorites-songs',
  templateUrl: './favorites-songs.component.html',
  styleUrls: ['./favorites-songs.component.css']
})
export class FavoritesSongsComponent implements OnInit {

  faStar = faStar;
  faHeart = faHeart;
  faPlay = faPlay;
  faList = faList;
  faDots = faEllipsisH;


  constructor() { }
  
  songs: Song[] = [{
    name: "Valse", 
    artist:"Ivan Susanin",
    album: "Glinka", 
    release: "26-04-2017",
    favorite: true,
},{
  name: "Maskarade",
  artist:"Aram Khachaturian",
  album: "Khachaturian", 
  release: "21-02-2016",
  favorite: true,
},{
  name: "Danse Macabre", 
  artist:"Camille Saint-Saens",
  album: "The Carnival of the animals", 
  release: "20-07-2020",
  favorite: true,
},{
name: "The Fountain",
artist:"Luncatic Soul",
album: "Through Shaded Woods", 
release: "12-08-2018",
favorite: false,
},{
  name: "Oblivion", 
  artist:"Luncatic Soul",
  album: "Through Shaded Woods", 
  release: "12-08-2018",
  favorite: true,
}
]
  ngOnInit(): void {
  }

}
