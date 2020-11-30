import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faClock, faEllipsisH, faHeart, faList, faPlay, faShareAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Comment } from '../detail/Comment';
import { Episode } from './Episode';

@Component({
  selector: 'app-detail-podcast',
  templateUrl: './detail-podcast.component.html',
  styleUrls: ['./detail-podcast.component.css']
})
export class DetailPodcastComponent implements OnInit {
  color: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;

  faStar = faStar;
  faClock = faClock;
  faShare = faShareAlt;
  faHeart = faHeart;
  faPlay = faPlay;
  faList = faList;
  faDots = faEllipsisH;
  faChecked = faCheckCircle;

  comments: Comment[] = [
  {
    username: "loki", 
    stars: [1],
    comment: "No me gusto para nada, la chica que habla es super irritante. "
  }, 
  { 
    username: "hulk_123", 
    stars: [1,2],
    comment: ""
  },
  {
    username: "natalia_vytas", 
    stars: [1,2,3,4],
    comment: "La verdad me gusto muchisimo. Muy buen podcast "
  },
  {
    username: "thor", 
    stars: [1,2,3],
    comment: "No soy muy fan de los podcast pero este es bastante entretenido."
  },
]

  episodes: Episode[] = [{
    name: "Arte como forma de vida",
    seen: true
  },{
    name: "Creatividad y mi yo creativo. ",
    seen: true
  },{
    name: "Bloqueo de artista",
    seen: true
  },{
    name: "El desarrollo del ser",
    seen: false
  },{
    name: "Crear por crear",
    seen: false
  }
]

  constructor() { }

  ngOnInit(): void {
    this.color = "#585A66";
    this.color2 = "#585A66";
    this.color3 = "#585A66";
    this.color4 = "#585A66";
    this.color5 = "#585A66";
  }

  getcolor() {
    return this.color;
  }

  getcolor2() {
    return this.color2;
  }
  getcolor3() {
    return this.color3;
  }
  getcolor4() {
    return this.color4;
  }
  getcolor5() {
    return this.color5;
  }

  clickAddTodo(n) {
    this.color = "#585A66";
    this.color2 = "#585A66";
    this.color3 = "#585A66";
    this.color4 = "#585A66";
    this.color5 = "#585A66";
    for (let i = 1; i <= n; i++) {
      if (i == 1) {
        this.color = "gold";
      } else if (i == 2) {
        this.color2 = "gold";
      } else if (i == 3) {
        this.color3 = "gold";
      } else if (i == 4) {
        this.color4 = "gold";
      } else if (i == 5) {
        this.color5 = "gold";
      }
    }
  }
}
