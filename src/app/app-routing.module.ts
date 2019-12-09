import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', loadChildren:'./landing-page/landing-page.module#LandingPageModule' },  
  { path: 'portfolio', loadChildren:'./portfolio/portfolio.module#PortfolioModule' },  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component:  RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
