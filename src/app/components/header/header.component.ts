import { Component, OnInit, EventEmitter, Output, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TrelloService } from 'src/app/services/trello-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private zone: NgZone, private router: Router, private trelloService: TrelloService) { }

  ngOnInit() {
  }

  goTodoTab(){
    if(!this.trelloService.boardSelected) this.trelloService.getBoards();
    this.zone.run(() => this.router.navigate(['logged', 'todotab']))
  }
  goDoingTab(){
    this.zone.run(() => this.router.navigate(['logged', 'doingtab']))
  }

}
