import { Routes } from '@angular/router';

import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';

//import { AuthGuard } from './auth/auth.guard';



export const appRoutes: Routes = [
    {
        path: 'register', component: RegisterComponent,
    },
    {
        path: 'login', component: LoginComponent,
    },
    {
        path: 'contact', component: ContactComponent,
    },
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];