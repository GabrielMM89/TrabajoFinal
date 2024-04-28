import { Routes } from '@angular/router';

import { MenuPlanetasComponent } from './menu-planetas/menu-planetas.component';
import { Pensamiento1Component } from './pensamiento1/pensamiento1.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'planeta',
        component: Pensamiento1Component
    }
];
