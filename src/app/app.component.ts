import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pensamiento1Component } from "./pensamiento1/pensamiento1.component";
import { Pensamiento2Component } from './pensamiento2/pensamiento2.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { MenuPlanetasComponent } from './menu-planetas/menu-planetas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrincipalPageComponent, MenuPlanetasComponent ,Pensamiento1Component, Pensamiento2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto-Final';
}
