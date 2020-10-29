import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ServicioService } from '../../servicio.service';
import { Administracion, AdministracionGet } from '../../modelos/admin.model';


@Component({
  selector: 'app-modal-inicio-admin',
  templateUrl: './modal-inicio-admin.component.html',
  styleUrls: ['./modal-inicio-admin.component.css']
})
export class ModalInicioAdminComponent implements OnInit {

  enviarDatos = new Administracion();

  constructor(private dialogRef : MatDialogRef<ModalInicioAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService : ServicioService,
    private router:Router) { }

  ngOnInit() {
  }

  clickSalir(){
    this.dialogRef.close();
  }

  envioAdmin(){
    this.verificacionAdmin(this.enviarDatos);
  }

  verificacionAdmin(body : Administracion){
    this.servicioService.verificacionAdmin(body).subscribe(data => {
      console.log(data.ok);
      if(data.ok === true){
        // localStorage.setItem("valoresUsuario",JSON.stringify(data));
        this.router.navigate(['/main-navbar']);
        this.clickSalir();
      }
      else {
        alert('ingresar los datos correctos');
      }
    }, 
    error =>{
      console.log(JSON.stringify(error));
    });
  }

}
