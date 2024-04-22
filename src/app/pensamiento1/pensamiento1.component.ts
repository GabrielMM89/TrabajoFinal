import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamiento1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pensamiento1.component.html',
  styleUrl: './pensamiento1.component.css'
})

export class Pensamiento1Component {
  
  // Definir un array de objetos que contienen cada pregunta y su respuesta correcta
preguntasRespuestas: any[] = [
  {
      pregunta: "Un grupo de 24 estudiantes está formado por 12 niñas y 12 niños. ¿Qué fracción del grupo son las niñas?",
      respuestaCorrecta: "A" // Respuesta correcta es A) 1/2
  },
  {
      pregunta: "Una torta se corta en 6 rebanadas iguales. Carlos come 2 rebanadas, María come 1 rebanada y guardan el resto. ¿Qué fracción de la torta comieron juntos?",
      respuestaCorrecta: "B" // Respuesta correcta es B) 2/3
  }
];
    
    // Función para verificar la respuesta dada por el usuario y devolver si es correcta o no
    verificarRespuesta(pregunta: string, respuestaUsuario: string): boolean {
        // Buscar la pregunta en el array de preguntas y respuestas
        const preguntaEncontrada = this.preguntasRespuestas.find(pr => pr.pregunta === pregunta);
    
        // Si la pregunta no se encuentra, devolver falso
        if (!preguntaEncontrada) {
            return false;
        }
    
        // Devolver verdadero si la respuesta del usuario es igual a la respuesta correcta
        return preguntaEncontrada.respuestaCorrecta === respuestaUsuario;
    }
    
    // Ejemplo de uso
    ejemploDeUso() {
        const pregunta1 = "Un grupo de 24 estudiantes está formado por 12 niñas y 12 niños. ¿Qué fracción del grupo son las niñas?";
        const respuestaUsuario1 = "A"; // Supongamos que el usuario eligió la respuesta A
        console.log(this.verificarRespuesta(pregunta1, respuestaUsuario1)); // Output: true (respuesta correcta)
        
        const pregunta2 = "Una torta se corta en 6 rebanadas iguales. Carlos come 2 rebanadas, María come 1 rebanada y guardan el resto. ¿Qué fracción de la torta comieron juntos?";
        const respuestaUsuario2 = "B"; // Supongamos que el usuario eligió la respuesta B
        console.log(this.verificarRespuesta(pregunta2, respuestaUsuario2)); // Output: true (respuesta correcta)
    }
  }
  