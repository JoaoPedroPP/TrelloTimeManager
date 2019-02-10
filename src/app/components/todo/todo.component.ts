import { Component, OnInit, NgZone } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Board } from 'src/app/models/board/board.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  boards: Array<Board> = [];
  viewComponent: string = 'boards-component';

  constructor(private trelloService: TrelloService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    this.trelloService.boardSelected === false ? this.viewComponent = 'boards-component':this.viewComponent = 'cards-component';
    this.trelloService.changeToDoTab.subscribe( data => this.viewComponent = data);
  }

  showLists(board: Board) {
    // this.trelloService.getCard();
    // this.trelloService.boardId = board.id
    // this.trelloService.getLists().then( data => {
    //   console.log(data)
    //   this.trelloService.getCards();  
    // })
  }

}
