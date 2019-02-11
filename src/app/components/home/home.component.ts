import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Card } from 'src/app/models/card/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show: boolean = false;
  card: Card;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.data);
    // this.route.data.map( data => data.card.json()).subscribe( res => console.log(res));
    this.route.data.subscribe((data) => {
      console.log(data);
      this.card = data['card'];
      console.log(this.card);
      // this.show = true;
    })
  }

}
