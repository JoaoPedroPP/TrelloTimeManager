import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  cards = ['joao', 'pedro'];
  card = 'ollllllaaaaojpiehfweihg';

  constructor() { }

  ngOnInit() {
    console.log(this.cards[1]);
  }

  show(){
    console.log(this.cards[1])
  }

}
