import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Card } from 'src/app/models/card/card.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private router: Router, private zone: NgZone) { }

  ngOnInit() {
  }

  startTask(card: Card){
    this.zone.run(() => this.router.navigate(['logged', 'home']));
  }

}
