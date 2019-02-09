import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxElectronModule } from 'ngx-electron';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoggedComponent } from './components/logged/logged.component';
import { TodoComponent } from './components/todo/todo.component';
import { DoingComponent } from './components/doing/doing.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { ConfigsService } from './services/configs.service';
import { TrelloService } from './services/trello-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    LoggedComponent,
    TodoComponent,
    DoingComponent,
    CardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [ConfigsService, TrelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
