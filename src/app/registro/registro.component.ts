import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Login, LoginGet } from '../modelos/login.model'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private servicioService: ServicioService, private router: Router) { }

  login = new Login();
  objLogin: Login;
  //editable
  resultado: Array<LoginGet>;

  ngOnInit() {
  }

  registro() {
    this.agregarUsuario(this.login);
  }

  agregarUsuario(body: Login) {
    alert('te haz registrado con éxito');
    this.servicioService.insertUsuario(body).subscribe(data => {
      // console.log(data);
      // this.objLogin = data;
      this.resultado = [];
      this.resultado.push(data);
    },
      error => {
        console.log(error)
      });
  }

  salir() {
    this.router.navigateByUrl('/inicio');
  }

}
