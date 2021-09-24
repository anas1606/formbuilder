import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderComponent } from './Components/form-builder/form-builder.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full",

  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: 'formbuilder',
    component: FormBuilderComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
