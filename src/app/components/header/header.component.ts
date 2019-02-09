import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('goTo') requestedTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  goTodoTab(){
    this.requestedTab.emit('todo');
    // this.requestedRoute.emit(['logged', 'todotab']);
  }
  goDoingTab(){
    this.requestedTab.emit('doing');
    // this.requestedRoute.emit(['logged', 'doingtab']);
  }

}
