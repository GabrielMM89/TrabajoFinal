import { Component, Input } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './pregunta.component.html',
  styleUrl: './pregunta.component.css'
})

export class PreguntaComponent {
  showImage = false;
  showMessage = false;
  message = '';
  @Input()
  data: Pregunta | undefined = undefined;

  checkAnswer(answer: number): void {
    if (answer === this.data?.respuesta) {
      this.message = '¡Felicitaciones, tu respuesta es correcta!';
    } else {
      this.message = 'Inténtalo de nuevo';
    }
    this.showMessage = true;
  }
}
