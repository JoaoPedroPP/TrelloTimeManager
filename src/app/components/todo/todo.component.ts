import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Board } from 'src/app/models/board/board.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  boards: Array<Board> = [];

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.trelloService.getBoards().then( data => {
      data.map((board, i) => {
        this.boards.push(new Board(board.id, board.name));
      })
    }).catch( err => console.log(err));
    // this.trelloService.getBoards();
    // this.trelloService.boards.subscribe(data => {
    //   console.log(data);
    //   this.boards = data;
    // });
  }

  showLists(board: Board) {
    // this.trelloService.getCard();
    this.trelloService.boardId = board.id
    this.trelloService.getLists().then( data => {
      console.log(data)
      // this.trelloService.getCards();  
    })
  }

}
