import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/service.index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre : string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.nombre = "chepo";
  }
  Salir (){
    console.log("saliendo");
    this.usuarioService.logOut(); 
   }

}
