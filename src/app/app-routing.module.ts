import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DohnutsComponent } from './components/dohnuts.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'dohnuts',
    component: DohnutsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
