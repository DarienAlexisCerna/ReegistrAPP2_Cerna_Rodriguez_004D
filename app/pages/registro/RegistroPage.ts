import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Iregistrar } from '../interfaces/interfaces';
import { ApicrudService } from 'src/app/servicios/apicrud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newregistrar: Iregistrar = {
    id:0,
    nombre: "",
    contrasena: "",
    rut: "",
    isactive: true
  };
  constructor(private alertController: AlertController,
               private apicrud: ApicrudService, 
              private router: Router) { }

  ngOnInit() {
  }

  usuario = {
    id:0,
    rut: '',
    email: '',
    nombre: '',
    password: '',
    edad: ''
  };




  async MostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Registro completo!',
      message: 'Se ha registrado correctamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  Enviar() {
    console.log('Formulario Enviado');
    this.MostrarMensaje();
    this.usuario.rut = '';
    this.usuario.email = '';
    this.usuario.nombre = '';
    this.usuario.password = '';
  }


  crearRegistrar(){
    this.apicrud.crearregistrar(this.newregistrar).subscribe();
    this.router.navigateByUrl("/inicio");
  }

}
