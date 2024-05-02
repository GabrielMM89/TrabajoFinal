import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PensamientoComponent } from './pensamiento/pensamiento.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { Pensamiento } from './interfaces/pensamiento';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NgFor, PensamientoComponent, PreguntaComponent],
})
export class AppComponent {
  title = 'Proyecto-Final';
  pensamientos: Pensamiento[];

  constructor(private sanitizer: DomSanitizer) {
    this.pensamientos = [
      {
        id: 1,
        preguntas: [
          {
            id: 'p1-1',
            titulo: 'Pizza',
            imagen: undefined,
            simulador: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.geogebra.org/m/RZPeMy4p'),
            pregunta:
              'Sofía tiene una pizza que divide en 8 partes iguales. Come 3 partes y guarda el resto. ¿Qué fracción de la pizza comió Sofía? Interactúa con la pizza para descubirlo',
            opciones: [
              { text: '1/5', value: 1 },
              { text: '3/8', value: 2 },
              { text: '5/8', value: 3 },
              { text: '8/3', value: 4 },
            ],
            respuesta: 2,
          },
          {
            id: 'p1-2',
            titulo: 'Grupo',
            imagen: undefined,
            simulador: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.geogebra.org/m/MZCchM8h#material/W5KDG5cJ'),
            pregunta:
              'Un grupo de 24 estudiantes está formado por 12 niñas y 12 niños. ¿Qué fracción del grupo son las niñas? Realiza la interacción con el simulador para reducir la fracción',
            opciones: [
              { text: '1/2', value: 1 },
              { text: '1/4', value: 2 },
              { text: '1/3', value: 3 },
              { text: '2/3', value: 4 },
            ],
            respuesta: 1,
          },
          {
            id: 'p1-3',
            titulo: 'Torta',
            imagen: undefined,
            simulador: undefined,
            pregunta:
              'Una torta se corta en 6 rebanadas iguales. Carlos come 2 rebanadas, María come 1 rebanada y guardan el resto. ¿Qué fracción de la torta comieron juntos?',
            opciones: [
              { text: '1/3', value: 1 },
              { text: '2/3', value: 2 },
              { text: '1/2', value: 3 },
              { text: '3/2', value: 4 },
            ],
            respuesta: 3,
          },
          {
            id: 'p1-4',
            titulo: 'Receta',
            imagen: undefined,
            simulador: undefined,
            pregunta:
              'Un panadero quiere preparar una receta que requiere 2 tazas de harina. Si sólo tiene 3/4 de taza de harina, ¿qué fracción adicional de harina necesita para completar la receta?',
            opciones: [
              { text: '5/4', value: 1 },
              { text: '1/4', value: 2 },
              { text: '1', value: 3 },
              { text: '1/2', value: 4 },
            ],
            respuesta: 1,
          },
        ],
      },
      {
        id: 2,
        preguntas: [
          {
            id: 'p2-1',
            titulo: 'Parque',
            imagen: './assets/parques2.png',
            simulador: undefined,
            pregunta:
              'En un parque triangular, cuyos lados miden 20 metros, 15 metros y 25 metros respectivamente, ¿Cuál es el perímetro total del parque?',
            opciones: [
              { text: '40 metros', value: 1 },
              { text: '60 metros', value: 2 },
              { text: '80 metros', value: 3 },
              { text: '60 metros cuadrados', value: 4 },
            ],
            respuesta: 2,
          },
          {
            id: 'p2-2',
            titulo: 'Baldosas',
            imagen: undefined,
            simulador: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.geogebra.org/m/aAQA654j'),
            pregunta:
              'Una habitación mide 18 unidades de longitud de largo, por 12 de ancho. Queremos embaldosar el suelo con baldosas cuadradas, de manera que no haya que cortar ninguna baldosa. Para embaldosar suelo mueve el punto cuadrado azul de la primera baldosa y se va moviendo. Para cambiar el tamaño de las baldosas mueve el deslizador horizontal. ¿Qué longitudes nos permiten rellenar la habitación totalmente sin que tener que cortar? ¿Cuál es la mayor de esas longitudes?',
            opciones: [
              { text: '60 baldosas', value: 1 },
              { text: '54 baldosas', value: 2 },
              { text: '58 baldosas', value: 3 },
              { text: '56 baldosas', value: 4 },
            ],
            respuesta: 1,
          },
        ],
      },
      {
        id: 3,
        preguntas: undefined,
      },
    ];
  }
}
