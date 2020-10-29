import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ServicioService } from '../servicio.service';
import { Login, LoginGet } from '../modelos/login.model';

@Component({
  selector: 'app-modal-sesion',
  templateUrl: './modal-sesion.component.html',
  styleUrls: ['./modal-sesion.component.css']
})
export class ModalSesionComponent implements OnInit {

  enviarDatos = new Login();

  constructor(
    private dialogRef: MatDialogRef<ModalSesionComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService: ServicioService,
    private router: Router) { }

  ngOnInit() {
  }

  //SALIR MODAL
  clickSalir() {
    this.dialogRef.close();
  }

  envio() {
    this.verificacionLogin(this.enviarDatos);
  }

  verificacionLogin(body: Login) {
    this.servicioService.envioVerificacion(body).subscribe(data => {
      console.log(data.ok);
      if (data.ok === true) {
        // localStorage.setItem("valoresUsuario",JSON.stringify(data));
        this.router.navigateByUrl('/home');
        this.clickSalir();
      }
      else {
        alert('ingresar los datos correctos');
      }
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
