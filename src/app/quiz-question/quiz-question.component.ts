import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {showImage = false;
  showMessage = false;
  message = '';
  question = {
    context: 'Parque',
    text: 'En un parque triangular, cuyos lados miden 20 metros, 15 metros y 25 metros respectivamente, ¿cuál es el perímetro total del parque?',
    image: './../../assets/parques2.png',
    options: [
      { text: 'a) 40 metros', value: 1 },
      { text: 'b) 60 metros', value: 2 },
      { text: 'c) 80 metros', value: 3 },
      { text: 'd) 60 metros cuadrados', value: 4 },
    ],
    answer: 2,
  };

  question2 = {
    context: 'Parque',
    options: [
      { text: 'a) 54 baldosas', value: 1 },
      { text: 'b) 60 baldosas', value: 2 },
      { text: 'c) 58 baldosas', value: 3 },
      { text: 'd) 56 baldosas', value: 4 },
    ],
    answer: 1,
  };

  checkAnswer(answer: number): void {
    if (answer === this.question.answer) {
      this.message = '¡Felicitaciones, tu respuesta es correcta!';
    } else {
      this.message = 'Inténtalo de nuevo';
    }
    this.showMessage = true;
  }



}
