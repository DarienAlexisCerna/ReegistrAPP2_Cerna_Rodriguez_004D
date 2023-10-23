import { Component } from '@angular/core';



interface Componente{

  name: string;

  icon: string;

  redirecTo: string;

}



@Component({

  selector: 'app-root',

  templateUrl: 'app.component.html',

  styleUrls: ['app.component.scss'],

})

export class AppComponent {

  constructor() {}





  componentes: Componente[]=[

  {

    name:'inicio',

    icon:'body-outline',

    redirecTo:'/Inicio'

  },

  {

    name:'Login',

    icon:'log-in-outline',

    redirecTo:'/login'

  },

  {

    name:'Registro',

    icon:'enter-outline',

    redirecTo:'/registro'

  },

  {

    name:'Información',

    icon:'information-circle-outline',

    redirecTo:'/informacion'

  },

  {

    name:'Listar',

    icon:'information-circle-outline',

    redirecTo:'/listar'

  }

 ]

}
