import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layout-module/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout-module/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: MainLayoutComponent, children: [
        { path: '', component: HomeComponent },
        ]},
    { path: 'login', component: AuthLayoutComponent, children: [
          { path: '', component: LoginComponent }
        ]}
];
