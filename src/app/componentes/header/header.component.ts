import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
Salir (){
 this.usuarioService.logOut(); 
}
}
