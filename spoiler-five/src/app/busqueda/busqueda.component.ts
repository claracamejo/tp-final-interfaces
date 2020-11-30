import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  genero: string[] = ["Rock", "Pop", "Indie", "Clasico"];
  decadas: string[] = ["70´s", "80´s", "90´s", "00´s"];
  seleccionadoGenero: string[] = [];
  seleccionadoDecada: string[] = [];

  ngOnInit(): void {
  }

}
