import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { TrelloService } from 'src/app/services/trello-service.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.scss']
})
export class LoggedComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone, private trelloService: TrelloService) { }

  ngOnInit() {
  }

  goRoute(event){
    this.trelloService.getBoards();
    this.zone.run(() => this.router.navigate(event));
  }

}
