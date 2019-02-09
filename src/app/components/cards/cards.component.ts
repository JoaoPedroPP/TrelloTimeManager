import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards = [
    'joao',
    'pedro'
  ]

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    // this.trelloService.getLists();
  }

}
