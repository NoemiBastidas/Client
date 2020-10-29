import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalPedidoComponent } from '../modal-pedido/modal-pedido.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pasteles, PastelesGet } from '../../modelos/productos.model';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  pastel = new PastelesGet();
  pasteles: Array<PastelesGet>;

  constructor(private servicioService: ServicioService,
    private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog) { }

  abrirModal(): void {
    const dialogRef = this.dialogo.open(ModalPedidoComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
    this.obtenerPas();
  }

  obtenerPas() {
    this.servicioService.getPasteles().subscribe(data => {
      this.pasteles = data;
      console.log(data);
    },
      error => {
        console.log(JSON.stringify(error));
      });
  }

}
