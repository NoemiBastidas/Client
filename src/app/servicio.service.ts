import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Pedidos } from './modelos/pedidos.model';
import { Pasteles, PastelesGet } from './modelos/productos.model'
import { Login , LoginGet } from './modelos/login.model'
import { AdministracionGet, Administracion } from './modelos/admin.model';
import { Images } from './modelos/image.model';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
}


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor( private http: HttpClient) { }

  // pastelObject : Object = {};
  pastel = new Pedidos();

  //OBTENER PEDIDOS
  getPedidos(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>('http://localhost:3000/getPedidos');
  }

  //OBTENER PRODUCTOS
  getPasteles(): Observable<PastelesGet[]>{
    return this.http.get<PastelesGet[]>('http://localhost:3000/getPasteles');
  }

  // BORRAR PEDIDO OJO
  // deletePedido(id : Pedidos | number){
  //   console.log(id);
  //   return this.http.delete(`http://localhost:3000/eliminar/${id}`);
  // }

  //INSERTAR PRODUCTOS
  insertProductos(pasteles : Pasteles): Observable<PastelesGet> {
    console.log(pasteles);
    return this.http.post<PastelesGet>('http://localhost:3000/agregarProducto', pasteles);
  }

  //INSERTAR IMAGEN
  insertarImagen(imagen: Images): Observable<Images> {
    console.log(imagen);
    return this.http.post<Images>('http://localhost:3000/agregarImagen', imagen);
  }

  //INSERT PEDIDO
  insertPedido(ped : Pedidos): Observable<Pedidos>{
    console.log(ped);
    return this.http.post<Pedidos>('http://localhost:3000/agregarPedido', ped);
  }

  //INSERTAR USUARIO
  insertUsuario(user : Login): Observable<LoginGet> {
    console.log(user);
    return this.http.post<LoginGet>('http://localhost:3000/agregarUsuario', user);
  }


  //INSERTAR ADMINISTRADOR
  insertAdmin(admin : Administracion): Observable<AdministracionGet> {
    console.log(admin);
    return this.http.post<AdministracionGet>('http://localhost:3000/agregarAdmin', admin);
  }

  //VERIFICAR ADMIN
  verificacionAdmin(admin : Administracion): Observable<any>{
    return this.http.post<AdministracionGet>('http://localhost:3000/logAdmin', admin);
  }

  //VERIFICACION LOGIN
  envioVerificacion(login : Login): Observable<any>{
    return this.http.post<LoginGet>('http://localhost:3000/login', login);
  }
}
