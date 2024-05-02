import { Component, Input } from '@angular/core';
import { Pensamiento } from '../interfaces/pensamiento';
import { NgFor, NgIf } from '@angular/common';
import { PreguntaComponent } from '../pregunta/pregunta.component';

@Component({
  selector: 'app-pensamiento',
  standalone: true,
  imports: [NgIf, NgFor, PreguntaComponent ],
  templateUrl: './pensamiento.component.html',
  styleUrl: './pensamiento.component.css'
})
export class PensamientoComponent {
  @Input()
  data: Pensamiento | undefined = undefined;
}
