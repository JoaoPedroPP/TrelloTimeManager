import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { ConfigsService } from './configs.service';
import { Board } from '../models/board/board.model';
import { List } from '../models/list/list.model';

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
  boardSelected: boolean = false;

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

  getCards() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    return this.http.get(`${this.url}/1/boards/${this.boardId}/cards`, {headers: headers, params: params}).toPromise();
    // this.http.get(`${this.url}/1/boards/${this.boardId}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
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
}
