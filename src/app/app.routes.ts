import { Routes } from '@angular/router';
import { Signup } from './signup/signup';
import { Address } from './address/address';
import { SignupValidator } from './signup-validator/signup-validator';

export const routes: Routes = [
    { path: "signup", component: Signup },
    { path: "dynamic", component: Address },
    { path: "validators", component: SignupValidator }
];
