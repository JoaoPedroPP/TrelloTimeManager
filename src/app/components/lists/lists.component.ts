import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { List } from 'src/app/models/list/list.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  lists: Array<List> = [];

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.lists = this.trelloService.lists;
  }

}
