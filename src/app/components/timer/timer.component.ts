import { Component, OnInit, Input } from '@angular/core';
import { TrelloService } from 'src/app/services/trello-service.service';
import { Card } from 'src/app/models/card/card.model';
import { TimerService } from 'src/app/services/timer.service';
import { ElectronService } from 'ngx-electron';

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
  clock: string = '00:00:00';

  constructor(private trelloService: TrelloService, private timerService: TimerService, private electronService: ElectronService) { }

  ngOnInit() {
    this.electronService.ipcRenderer.on("screen-off", (event) => this.count = false);
    this.electronService.ipcRenderer.on("screen-on", (event) => this.count = true);
    this.trelloService.moveCardDoing(this.card.id, this.card.listId, this.card.doingList);
    this.counter = setInterval(() => {
      if (this.count) this.seconds++;
      if (this.count && this.seconds == 60) {this.seconds = 0; this.minutes++;}
      if (this.count && this.minutes == 60) {this.minutes = 0; this.hours++;}
      this.clock = `${this.hours > 9 ? this.hours:'0'+this.hours}:${this.minutes > 9 ? this.minutes:'0'+this.minutes}:${this.seconds > 9 ? this.seconds:'0'+this.seconds}`
      if(this.count) this.timerService.sendTime(this.clock);
    }, 1000);
  }

  pauseTask() {
    this.count = !this.count;
    this.count === true ? this.playPause = 'Pause':this.playPause = 'Play';
  }

  stopTask() {
    clearInterval(this.counter);
    this.clock = '00:00:00';
    setTimeout(() => {
      this.timerService.sendTime('')
    }, 500)
  }

}
