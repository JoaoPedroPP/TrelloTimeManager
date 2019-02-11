import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedComponent } from './components/logged/logged.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoingComponent } from './components/doing/doing.component';
import { BoardsComponent } from './components/boards/boards.component';
import { ListsComponent } from './components/lists/lists.component';
import { Card } from './models/card/card.model';
import { CardResolver } from './services/card-resolver.service';


const routes: Routes = [
  { path: "", component: LoginComponent, pathMatch: "full" },
  { path: "logged", component: LoggedComponent, children: [
    { path: "home", component: HomeComponent, children: [
      { path: ':id', component: HomeComponent, resolve: {card: CardResolver} }
    ] },
    { path: "todotab", component: TodoComponent },
    { path: "doingtab", component: DoingComponent }
  ] },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
