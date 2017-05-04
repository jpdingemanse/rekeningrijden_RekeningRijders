import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'app/body/home.component';
import { ProfileComponent } from 'app/profile/profile.component';
export const router: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: ProfileComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(router);