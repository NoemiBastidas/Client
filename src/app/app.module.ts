import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,
  MatDialogModule, MatFormFieldModule, MatButtonToggleModule, MatInputModule} from '@angular/material';
//COMPONENTES
import { SesionDialogComponent } from './components/sesion-dialog/sesion-dialog.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Categoria1Component } from './components/categoria1/categoria1.component';
import { Categoria2Component } from './components/categoria2/categoria2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ModalSesionComponent } from './modal-sesion/modal-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { ModalPedidoComponent } from './components/modal-pedido/modal-pedido.component';
import { ModalAdminComponent } from './components/modal-admin/modal-admin.component';
import { ModalInicioAdminComponent } from './components/modal-inicio-admin/modal-inicio-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    SesionDialogComponent,
    PedidosComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    LoginComponent,
    Categoria1Component,
    Categoria2Component,
    InicioComponent,
    CarritoComponent,
    ModalSesionComponent,
    RegistroComponent,
    HomeComponent,
    ModalPedidoComponent,
    ModalAdminComponent,
    ModalInicioAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    //angular
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule
  ],
  entryComponents: [SesionDialogComponent, ModalSesionComponent, ModalPedidoComponent, ModalAdminComponent,
    ModalInicioAdminComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
