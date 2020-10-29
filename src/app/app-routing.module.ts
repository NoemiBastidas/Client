import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { Categoria1Component } from './components/categoria1/categoria1.component';
import { Categoria2Component } from './components/categoria2/categoria2.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './components/home/home.component';



const routes: Routes = [
  // { path:'', redirectTo:'main-navbar', pathMatch:'full' },
  { path: '', component: InicioComponent , pathMatch: 'full' },
  // { path: '**', redirectTo:'/', pathMatch:'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'main-navbar', component: MainNavbarComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categoria1', component: Categoria1Component },
  { path: 'categoria2', component: Categoria2Component },
  { path: 'carrito', component: CarritoComponent },
  { path: 'registro', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
