import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pensamiento1Component } from "./pensamiento1/pensamiento1.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Pensamiento1Component]
})
export class AppComponent {
  title = 'Proyecto-Final';
}
