import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'app/body/home.component';
export const router: Routes = [
    { path: 'home', component: HomePageComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(router);