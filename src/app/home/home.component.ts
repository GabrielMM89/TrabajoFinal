import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { PensamientoComponent } from '../pensamiento/pensamiento.component';
import { PreguntaComponent } from '../pregunta/pregunta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, NgFor, PensamientoComponent, PreguntaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  irAPensamiento(id: number) {
    this.router.navigate(['/pensamiento', id]);
  }

}