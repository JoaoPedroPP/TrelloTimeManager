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
  listSelected: boolean = false;
  changeToDoTab: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient, private configService: ConfigsService) {
    this.key = this.configService.key;
    this.token = this.configService.token;
  }

  getBoards() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    if (!this.boardSelected){
      this.http.get(`${this.url}/1/members/me/boards`, {headers: headers, params: params}).subscribe( (data: Array<Object>) => {
        data.map((board: any, i: number) => {
          this.boards.push(new Board(board.id, board.name));
        });
        this.boardSelected = true;
      });
    }
  }

  getCards(idBoard, idList) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    const doingList = this.findDoingList();
    this.http.get(`${this.url}/1/boards/${idBoard}/cards`, {headers: headers, params: params}).subscribe((data: Array<object>) => {
      data.map((card: any, i: number) => {
        if (card.idList === idList) this.cards.push(new Card(card.id, card.name, card.idList, card.idBoard, doingList));
      });
      this.boardSelected = true;
    });
  }

  getLists(id) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    this.http.get(`${this.url}/1/boards/${id}/lists`, {headers: headers, params: params}).subscribe((data: Array<object>) => {
      data.map((list: any, i: number) => {
        this.lists.push(new List(list.id, list.name, list.idBoard));
      })
      this.listSelected = true;
    });
  }

  getCard(listId) {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('fields', 'id,name,badges,labels');
    this.http.get(`${this.url}/1/lists/${listId}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
  }

  findCard(id){
    const card = this.cards.find( card => {return card.id === id});
    return card;
  }

  moveCardDoing(cardId, idList, newListId) {
    const headers = new HttpHeaders({"Content-Type":"application/json"});
    const params = new HttpParams().set('value', newListId).set("key",this.key).set("token",this.token).set("pos", "top");
    const body = {};
    this.http.put(`${this.url}/1/cards/${cardId}/idList`, body, {headers: headers, params: params}).subscribe( data => console.log(data));
  }

  findDoingList() {
    const list =  this.lists.find( list => {return list.name == 'Doing'});
    return list === undefined ? '':list.id;
  }
}
