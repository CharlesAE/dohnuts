import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DohnutsComponent } from './components/dohnuts.component';
import { DohnutComponent } from './components/dohnut.component';
import { SignupComponent } from './components/signup.component';
import { LoginComponent } from './components/login.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'dohnuts',
    component: DohnutsComponent
  },
  {
    path: 'dohnut',
    component: DohnutComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
