	
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../servicios/usuario/usuario.service';
import { Usuario } from '../../models/usuario.model';



@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

formaLogin : FormGroup;
hide = true;
constructor(public router: Router, public fb: FormBuilder, private usuarioService: UsuarioService) { }

ngOnInit() {
this.formaLogin = this.fb.group({
email: ['', [Validators.required, Validators.email]],
password:['', Validators.required]
});

}

getErrorEmailMessage(){
return this.formaLogin.controls['email'].hasError('required') ? 'Debes entrar el correo' :
this.formaLogin.controls['email'].hasError('email') ? 'Email no valido' :
'';
};

logearUsuario(){
console.log(this.formaLogin.value);
if( this.formaLogin.invalid){

return;
} 
let usuario = new Usuario(
null,
this.formaLogin.value.email,
this.formaLogin.value.password,
null
);
this.usuarioService.login(usuario)
.subscribe(correcto=> this.router.navigate(['/home']));
};

// ingresar(){
// this.router.navigate(['/nopagefound']);
// };
}