import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Card } from 'src/app/models/card/card.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor(private router: Router, private route: ActivatedRoute, private zone: NgZone) { }

  ngOnInit() {
  }

  startTask(card: Card){
    // this.route.data = card;
    console.log(this.route)
    this.zone.run(() => this.router.navigate(['logged', card.id]));
  }

}
