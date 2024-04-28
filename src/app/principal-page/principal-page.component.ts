import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal-page.component.html',
  styleUrl: './principal-page.component.css'
})
export class PrincipalPageComponent {

  @Input() titulo:any = {}


  count = 0;


  addCount() {
    this.count = this.count + 1;
  }

  minusCount() {
    this.count = this.count - 1;
  }
}
