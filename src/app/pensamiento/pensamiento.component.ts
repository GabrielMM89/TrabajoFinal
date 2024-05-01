import { Component, Input } from '@angular/core';
import { Pensamiento } from '../interfaces/pensamiento';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pensamiento',
  standalone: true,
  imports: [NgIf ],
  templateUrl: './pensamiento.component.html',
  styleUrl: './pensamiento.component.css'
})
export class PensamientoComponent {
  @Input()
  data: Pensamiento | undefined = undefined
}
