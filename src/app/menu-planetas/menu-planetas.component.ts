import { Component } from '@angular/core';
import { PrincipalPageComponent } from '../principal-page/principal-page.component';

@Component({
  selector: 'app-menu-planetas',
  standalone: true,
  imports: [PrincipalPageComponent],
  templateUrl: './menu-planetas.component.html',
  styleUrl: './menu-planetas.component.css'
})
export class MenuPlanetasComponent {

  opcionmultiple = {
    pregunta: '¿el cielo es azul?',
    opciones: {
      a: 'si',
      b: 'no'
    },
    respuesta: 'a'
  }


}
