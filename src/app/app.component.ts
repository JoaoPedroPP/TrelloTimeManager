import { Component, OnInit } from '@angular/core';
import { ConfigsService } from './services/configs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'TrelloTimeManager';
  log: boolean = false;

  constructor(private configService: ConfigsService) {
    this.configService.getTrelloKey();
  }

  ngOnInit(){
    // this.configService.getTrelloKey();
    this.configService.auth.subscribe(data => {
      console.log(data);
      this.log = data
    });
    // this.configService.auth.subscribe(data => {if(data === true) this.log = data;});
  }

  login(event){
    this.log = event;
  }
}
