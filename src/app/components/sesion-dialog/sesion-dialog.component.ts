import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../../servicio.service';
import { Pasteles } from '../../modelos/productos.model';
import { Images } from 'src/app/modelos/image.model';

@Component({
  selector: 'app-sesion-dialog',
  templateUrl: './sesion-dialog.component.html',
  styleUrls: ['./sesion-dialog.component.css']
})
export class SesionDialogComponent implements OnInit {

  formProducto: FormGroup;

  pasteles = new Pasteles();
  objPasteles: Pasteles;
  srcFoto: any;
  images: Images = new Images();

  constructor(
    private dialogRef: MatDialogRef<SesionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string,
    private servicioService: ServicioService,
    private fb: FormBuilder) { }

  ngOnInit() {
    // this.agregarProducto(Pasteles);
    this.crearFormularioCliente();
  }

  crearFormularioCliente() {
    this.formProducto = this.fb.group({
      nombre: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.required]],
      email: ['', [Validators.minLength(5), Validators.maxLength(20), Validators.required,]],
      descripcion: ['', [Validators.minLength(10), Validators.maxLength(40), Validators.required]],
      precio: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      sabor: ['', [Validators.minLength(5), Validators.maxLength(15), Validators.required]]
    });
  }

  // SALIR MODAL
  clickSalir() {
    this.dialogRef.close();
  }

  CodificarArchivo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log(file);
        this.images.nombreImagen = file.name;
        this.images.tipoImagen = file.type;
        this.images.contenidoImagen = reader.result.toString().split(',')[1];
        this.srcFoto = 'data:' + this.images.tipoImagen + ';base64,' + this.images.contenidoImagen;
      };
    }
  }

  // AGREGAR PRODUCTO
  agregarProducto() {
    alert('Producto agregado correctamente');
    this.servicioService.insertarImagen(this.images).subscribe(r => {
      console.log(r);
      const datos = r.datos[0];
      this.pasteles.imagen = datos.id;
      this.servicioService.insertProductos(this.pasteles).subscribe(data => {
        console.log(data);
      },
        error => {
          console.log(error);
        });
    });
  }

  get nombre() { return this.formProducto.get('nombre'); }
  get descripcion() { return this.formProducto.get('descripcion'); }
  get precio() { return this.formProducto.get('precio'); }
  get imagen() { return this.formProducto.get('imagen'); }
  get sabor() { return this.formProducto.get('sabor'); }

}
