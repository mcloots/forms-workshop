import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Address } from './address/address';

export const routes: Routes = [
    { path: "signup", component: Signup },
    { path: "dynamic", component: Address }
];
