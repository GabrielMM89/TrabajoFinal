import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';
import { PensamientoComponent } from './pensamiento/pensamiento.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component:HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'pensamiento/:id',
        component: PensamientoComponent
    }
];
