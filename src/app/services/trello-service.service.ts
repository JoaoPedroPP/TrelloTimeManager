import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { ConfigsService } from './configs.service';
import { Board } from '../models/board/board.model';
import { List } from '../models/list/list.model';
import { Card } from '../models/card/card.model';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  url: string = 'https://api.trello.com';
  key: string;
  token: string;
  boardId: string = '596b7bc8f0379d3c16b53a94';
  boards: Array<Board> = [];
  board: EventEmitter<Array<Board>> = new EventEmitter();
  lists: Array<List> = [];
  cards: Array<Card> = [];
  boardSelected: boolean = false;
  changeToDoTab: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private configService: ConfigsService) {
    this.key = this.configService.key;
    this.token = this.configService.token;
  }

  getBoards() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    // return this.http.get(`${this.url}/1/members/me/boards`, {headers: headers, params: params}).toPromise();
    this.http.get(`${this.url}/1/members/me/boards`, {headers: headers, params: params}).subscribe( data => {
      console.log(data)
      data.map((board, i) => {
        console.log(board)
        this.boards.push(new Board(board.id, board.name));
      });
    });
  }

  getCards(idBoard, idList) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    // return this.http.get(`${this.url}/1/boards/${this.boardId}/cards`, {headers: headers, params: params}).toPromise();
    // this.http.get(`${this.url}/1/boards/${id}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
    this.http.get(`${this.url}/1/boards/${idBoard}/cards`, {headers: headers, params: params}).subscribe(data => {
      // this.cards = data.filter(data => {return data.idList === idList});
      data.map((card, i) => {
        if (card.idList === idList) this.cards.push(new Card(card.id, card.name, card.idList, card.idBoard));
      });
      this.boardSelected = true;
      console.log(this.cards);
    });
  }

  getLists(id) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    // return this.http.get(`${this.url}/1/boards/${this.boardId}/lists`, {headers: headers, params: params}).toPromise();
    this.http.get(`${this.url}/1/boards/${id}/lists`, {headers: headers, params: params}).subscribe(data => {
      console.log('list', data);
      data.map((list, i) => {
        this.lists.push(new List(list.id, list.name, list.idBoard));
      })
    });
  }

  getCard(listId) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('fields', 'id,name,badges,labels');
    this.http.get(`${this.url}/1/lists/${listId}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
  }

  findCard(id){
    const card = this.cards.find( card => {return card.id === id});
    console.log(card.name);
    return card;
  }
}
