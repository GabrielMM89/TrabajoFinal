import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PensamientoComponent } from './pensamiento/pensamiento.component';
import { PreguntaComponent } from './pregunta/pregunta.component';
import { Pensamiento } from './interfaces/pensamiento';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NgFor , PensamientoComponent, PreguntaComponent]
})
export class AppComponent {
  title = 'Proyecto-Final';

  pensamientos: Pensamiento[] = [
    {
      id: '1',
      preguntas: [
        {
          id: 'p1-1',
          pregunta: '1. Sofía tiene una pizza que divide en 8 partes iguales. Come 3 partes y guarda el resto. ¿Qué fracción de la pizza comió Sofía?',
          opciones: ['A) 1/5', 'B) 3/8', 'C) 5/8', 'D) 8/3'],
          respuesta: 'x'
        },
        {
          id: 'p1-2',
          pregunta: '2. Un grupo de 24 estudiantes está formado por 12 niñas y 12 niños. ¿Qué fracción del grupo son las niñas?',
          opciones: ['A) 1/2', 'B) 1/4', 'C) 1/3', 'D) 2/3'],
          respuesta: 'x'
        },
        {
          id: 'p1-3',
          pregunta: '3.  Una torta se corta en 6 rebanadas iguales. Carlos come 2 rebanadas, María come 1 rebanada y guardan el resto. ¿Qué fracción de la torta comieron juntos?',
          opciones: ['A) 1/3', 'B) 2/3', 'C) 1/2', 'D) 3/6'],
          respuesta: 'x'
        },
        {
          id: 'p1-4',
          pregunta: '4.  Un panadero quiere preparar una receta que requiere 2 tazas de harina. Si solo tiene ¾ de taza de harina, ¿qué fracción adicional de harina necesita para completar la receta?',
          opciones: ['A) 1/4', 'B) 1/2', 'C) 3/4', 'D) 1'],
          respuesta: 'x'
        },
      ]
    },
    {
      id: '2',
      preguntas: [
        {
          id: 'p1-1',
          pregunta: '1. Sofía tiene una pizza que divide en 8 partes iguales. Come 3 partes y guarda el resto. ¿Qué fracción de la pizza comió Sofía?',
          opciones: ['A) 1/5', 'B) 3/8', 'C) 5/8', 'D) 8/3'],
          respuesta: 'x'
        },
        {
          id: 'p1-2',
          pregunta: '2. Un grupo de 24 estudiantes está formado por 12 niñas y 12 niños. ¿Qué fracción del grupo son las niñas?',
          opciones: ['A) 1/2', 'B) 1/4', 'C) 1/3', 'D) 2/3'],
          respuesta: 'x'
        },
        {
          id: 'p1-3',
          pregunta: '3.  Una torta se corta en 6 rebanadas iguales. Carlos come 2 rebanadas, María come 1 rebanada y guardan el resto. ¿Qué fracción de la torta comieron juntos?',
          opciones: ['A) 1/3', 'B) 2/3', 'C) 1/2', 'D) 3/6'],
          respuesta: 'x'
        },
        {
          id: 'p1-4',
          pregunta: '4.  Un panadero quiere preparar una receta que requiere 2 tazas de harina. Si solo tiene ¾ de taza de harina, ¿qué fracción adicional de harina necesita para completar la receta?',
          opciones: ['A) 1/4', 'B) 1/2', 'C) 3/4', 'D) 1'],
          respuesta: 'x'
        },
      ]
    }
  ]
}

