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
    if (!this.trelloService.boardSelected) this.zone.run(() => this.router.navigate(['logged','todotab', 'boards']));
    this.trelloService.boardSelected === false ? this.viewComponent = 'boards-component':this.viewComponent = 'cards-component';
    this.trelloService.changeToDoTab.subscribe( data => this.viewComponent = data);
    // this.boards = this.trelloService.boards;
    // this.trelloService.getBoards().then( data => {
    //   data.map((board, i) => {
    //     this.boards.push(new Board(board.id, board.name));
    //   })
    // }).catch( err => console.log(err));
    // this.trelloService.getBoards();
    // this.trelloService.board.subscribe(data => {
    //   console.log(data);
    //   this.boards = data;
    // });
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
