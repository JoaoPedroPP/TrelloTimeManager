import { Component, OnInit, Input } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Card } from 'src/app/models/card/card.model';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() card: Card;
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  counter: any = null;
  count: boolean = true;
  playPause: string = 'Pause'

  constructor(private trelloService: TrelloService) { }

  ngOnInit() {
    this.trelloService.moveCardDoing(this.card.id, this.card.listId, this.card.doingList);
    this.counter = setInterval(() => {
      if (this.count) this.seconds++;
      if (this.count && this.seconds == 60) {this.seconds = 0; this.minutes++;}
      if (this.count && this.minutes == 60) {this.minutes = 0; this.hours++;}
    }, 1000);
  }

  pauseTask() {
    this.count = !this.count;
    this.count === true ? this.playPause = 'Pause':this.playPause = 'Play';
  }

  stopTask() {
    clearInterval(this.counter);
  }

}
