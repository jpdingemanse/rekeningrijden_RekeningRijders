import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'app/body/home.component';
import { ProfileComponent } from 'app/profile/profile.component';
import {InvoicePageComponent} from './../invoiceView/invoice.component'
export const router: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'invoice', component: InvoicePageComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(router);