import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Pedidos } from 'src/app/modelos/pedidos.model';
import { ServicioService } from 'src/app/servicio.service';
import { Images } from 'src/app/modelos/image.model';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent implements OnInit {

  pedido = new Pedidos();
  objPedido: Pedidos;

  constructor(private dialogRef: MatDialogRef<ModalPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService: ServicioService) { }

  ngOnInit() {
  }

  // SALIR MODAL
  clickSalir() {
    this.dialogRef.close();
  }

  agregarPedido() {
    this.servicioService.insertPedido(this.pedido).subscribe(data => {
      this.objPedido = data;
      alert('El pedido se ha realizado con éxito');
    },
      error => {
        console.log(error)
      });
  }



}
