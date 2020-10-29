import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalSesionComponent } from '../../modal-sesion/modal-sesion.component';
import { ModalInicioAdminComponent } from '../modal-inicio-admin/modal-inicio-admin.component';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dialogo: MatDialog
  ) { }

  abrirModal():void{
    const dialogRef = this.dialogo.open(ModalSesionComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  abrirModalInicioAdmin():void{
    const dialogRef = this.dialogo.open(ModalInicioAdminComponent, {});
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
