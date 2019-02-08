import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('goTo') requestedRoute = new EventEmitter<Array<string>>();

  constructor() { }

  ngOnInit() {
  }

  goTodoTab(){
    this.requestedRoute.emit(['logged', 'todotab']);
  }
  goDoingTab(){
    this.requestedRoute.emit(['logged', 'doingtab']);
  }

}
