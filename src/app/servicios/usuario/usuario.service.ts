import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



import { map } from "rxjs/operators";
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router, 
  ) {
    this.cargarStorage();
    console.log("servicios de usuario listo");
  }


  estaLogueado() {
    return this.token.length > 5 ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    } else {
      this.token = "";
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
    // console.log(localStorage.getItem('usuario'));
    // console.log(localStorage.getItem('token'));
  }

  login(usuario: Usuario) {
    let url = URL_SERVICIOS + "/login";
    return this.http.post(url, usuario)
        .pipe(map((resp: any) => {
          // localStorage.setItem('id', resp.id);
          // localStorage.setItem('token', resp.token);
          // localStorage.setItem('usuario', JSON.stringify(resp.usuario));
          this.guardarStorage(resp.id, resp.token, resp.usuario);
          return true;
        }))
        
        
  }

  logOut() {
    this.token = "";
    this.usuario = null;
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("id");
    this.router.navigate(["/login"]);
  }

  crearUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + "/usuario?token=" + this.token;
    return this.http.post(url, usuario)
          .pipe(map((resp: any) => {
            return resp.usuario;
          }));
          
  }

  borrarUsuario(id: string) {
    let url = URL_SERVICIOS + "/usuario/" + id;
    url += "?token=" + this.token;

    return this.http.delete(url)
          .pipe(map((resp: any) => {
            return true;
          }));
  }

  cargarUsuarios() {
    let url = URL_SERVICIOS + "/usuario";
    return this.http.get(url)
          .pipe(map((resp: any) => {
            return resp.usuarios;
          }));
  }

  cargarUsuario(id : string){
    let url = URL_SERVICIOS + "/usuario/" + id;
    return this.http.get(url)
          .pipe(map((resp: any)=> 
            resp.usuario));
  }

  
}