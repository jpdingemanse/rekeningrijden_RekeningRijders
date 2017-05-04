import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from 'app/body/home.component';
import {InvoicePageComponent} from './../invoiceView/invoice.component'
export const router: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'invoice', component: InvoicePageComponent}
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(router);