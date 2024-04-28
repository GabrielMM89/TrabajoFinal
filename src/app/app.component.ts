import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pensamiento1Component } from "./pensamiento1/pensamiento1.component";
import { Pensamiento2Component } from './pensamiento2/pensamiento2.component';
import { MenuPlanetasComponent } from './menu-planetas/menu-planetas.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { Pensamiento3Component } from './pensamiento3/pensamiento3.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
       PrincipalPageComponent,
        MenuPlanetasComponent,
        Pensamiento1Component, 
        Pensamiento2Component,
        Pensamiento3Component
      ]
})

export class AppComponent {
  title = 'Proyecto-Final';
}
