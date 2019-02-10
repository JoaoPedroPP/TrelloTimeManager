import { Component, OnInit } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Card } from 'src/app/models/card/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  cards: Array<Card> = [];
  // cards = [
  //   'joao',
  //   'pedro'
  // ]

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.cards = this.trelloService.cards;
  }

}
