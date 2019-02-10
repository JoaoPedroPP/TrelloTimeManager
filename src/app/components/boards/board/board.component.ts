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

  constructor(private trelloService: TrelloService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  getList(id) {
    console.log(id)
    this.trelloService.getLists(id);
    this.trelloService.changeToDoTab.emit('lists-component');
    // this.zone.run(() => this.router.navigate(['logged','todotab', 'list']));
  }

}
