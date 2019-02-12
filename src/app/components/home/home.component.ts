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
  text: string = "Ola, Voce ainda nao possui tarefas ativas, escolha uma para comecar :)"

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      console.log(data['card']);
      this.card = data['card'];
      this.text = `O seginte card foi selecionado ${this.card.name} e a contagem de tempo ja iniciou :)`
    })
  }

}
