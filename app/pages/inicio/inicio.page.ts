import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string; 
}

export interface Usuarios{ 
  nombre: string;
  isactive: boolean

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarios= [];
  
  componentes: Componente[]=[
    {
      name:'Ir al login',
      icon:'cafe-outline',
      redirecTo:'/login'
    },
    {
      name:'Ir a la lista',
      icon:'bug-outline',
      redirecTo:'/listar'
    },
    {
      name:'Ir al registro',
      icon:'sunny-outline',
      redirecTo:'/registro'
    },
  ]


  

  constructor(private menuController: MenuController, private router: Router) { }

  ngOnInit() {}
  


  mostrarMenu(){
    this.menuController.open('first');
  }
  redirectLogin() {

    this.router.navigate(['/login']);
 
  }
 
   redirectRegistro() {
 
    this.router.navigate(['/registro']);
 
  }
 
   redirectInformacion() {
 
    this.router.navigate(['/informacion']);
 
  }

  redirectListar() {

    this.router.navigate(['/listar']);
  }


}

