import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServicioService } from '../../servicio.service';
import { Administracion } from '../../modelos/admin.model';

@Component({
  selector: 'app-modal-admin',
  templateUrl: './modal-admin.component.html',
  styleUrls: ['./modal-admin.component.css']
})
export class ModalAdminComponent implements OnInit {

  admin = new Administracion();
  objAdmin : Administracion;

  constructor(private dialogRef : MatDialogRef<ModalAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService : ServicioService) { }

  ngOnInit() {
  }

  //SALIR MODAL
  clickSalir(){
    this.dialogRef.close();
  }

  //AGREGAR ADMINISTRADOR
  agregarAdmin(){
    alert('Ha sido un éxito');
    this.servicioService.insertAdmin(this.admin).subscribe(data => {
      // console.log(data);
      this.objAdmin = data;
    },
    error =>{
      console.log(error)
    });
  }

}
