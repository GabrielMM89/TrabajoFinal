import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Pensamiento1Component } from './pensamiento1/pensamiento1.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'pensamiento1',
        component:Pensamiento1Component
    }
];
