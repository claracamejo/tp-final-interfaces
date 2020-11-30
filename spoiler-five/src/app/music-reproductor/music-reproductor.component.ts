import { Component, OnInit } from '@angular/core';
import { faChevronDown, faChevronUp, faHeart, faList, faPlayCircle, faStar, faStepBackward, faStepForward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-music-reproductor',
  templateUrl: './music-reproductor.component.html',
  styleUrls: ['./music-reproductor.component.css']
})
export class MusicReproductorComponent implements OnInit {
  color: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  corazon: string;
  expandido: string;
  comun: string;

  constructor() { }
  faVolume = faVolumeUp;
  faHeart = faHeart;
  faUp = faChevronUp;
  faDown = faChevronDown;
  faPlay = faPlayCircle;
  faNext = faStepForward;
  faPrevious = faStepBackward;
  faStar = faStar;
  faList = faList;

  ngOnInit(): void {
    this.color = "#585A66";
    this.color2 = "#585A66";
    this.color3 = "#585A66";
    this.color4 = "#585A66";
    this.color5 = "#585A66";
    this.corazon = "#585A66";
    this.expandido = "hidden";
    this.comun = "visible";
  }

  getCorazon() {
    return this.corazon;
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

  getexpandido() {
    return this.expandido;
  }

  getcomun() {
    return this.comun;
  }

  clickCorazon() {
    if (this.corazon == "#585A66") {
      this.corazon = "#fa2727";
    } else {
      this.corazon = "#585A66"
    }

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

  bajar() {
    this.comun = "visible";
    this.expandido = "hidden";
  }

  subir() {
    this.comun = "hidden";
    this.expandido = "visible";
  }

}
