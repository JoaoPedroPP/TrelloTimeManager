import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Board } from 'src/app/models/board/board.model';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: Board;

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
  }

  getList(id) {
    console.log(id)
    if(!this.trelloService.listSelected) this.trelloService.getLists(id);
    this.trelloService.changeToDoTab.emit('lists-component');
  }

}
