import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Board } from 'src/app/models/board/board.model';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  boards: Array<Board> = []

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.boards = this.trelloService.boards;
  }

}
