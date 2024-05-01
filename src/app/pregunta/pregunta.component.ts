import { Component, Input } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})

export class PreguntaComponent {
  @Input()
  data: Pregunta | undefined = undefined;
}
