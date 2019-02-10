import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/models/list/list.model';
import { TrelloService } from 'src/app/services/trello-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: List;

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
  }

  pushCards(listObj: List){
    this.trelloService.getCard(listObj.id);
    this.trelloService.changeToDoTab.emit('cards-component')
  }

}
