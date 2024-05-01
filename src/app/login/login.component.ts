import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.authenticate(this.username, this.password)) {
      // Si las credenciales son correctas, redirecciona al usuario al dasboard
      this.router.navigate(['home']); //pon la ruta la que queire llegar dentro de las comillas  
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
