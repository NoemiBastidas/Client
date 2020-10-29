import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicioService } from '../../servicio.service';
import { Pedidos } from '../../modelos/pedidos.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos : Pedidos[];
  pedido = new Pedidos();

  constructor( private servicioService : ServicioService ) { }

  ngOnInit() {
    this.obtenerPedidos();
  }

  //OBTENER PEDIDOS
  obtenerPedidos(){
    this.servicioService.getPedidos().subscribe(data => {
      this.pedidos = data;
      console.log(data);
    },
    error =>{
      console.log(JSON.stringify(error));
    })
  }

  //BORRAR PEDIDO
  // borrarPedido(){
  //   this.servicioService.deletePedido(this.pedido.id).subscribe(data => {
  //     this.obtenerPedidos();
  //     console.log(data);
  //     console.log('se ha borrado correctamente');
  //   },
  //   error => {
  //     console.log(JSON.stringify(error));
  //   })
  // }

}
