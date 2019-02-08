import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedComponent } from './components/logged/logged.component';


const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "logged", component: LoggedComponent, children: [
    { path: "home", component: HomeComponent }
  ] },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
