import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pensamiento1Component } from './pensamiento1/pensamiento1.component';
import { Pensamiento2Component } from './pensamiento2/pensamiento2.component';
import { Pensamiento3Component } from './pensamiento3/pensamiento3.component';
import { Pensamiento5Component } from './pensamiento5/pensamiento5.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guard/auth.guard';

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
        path: 'pensamiento1',
        component:Pensamiento1Component,
        
    },

    {
        path: 'pensamiento2',
        component:Pensamiento2Component,
        
    },
    {
        path: 'pensamiento3',
        component:Pensamiento3Component,
        
    
    },
   
    {
        path: 'pensamiento5',
        component:Pensamiento5Component,
        
        
    },
];
