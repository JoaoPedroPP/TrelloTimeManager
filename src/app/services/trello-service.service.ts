import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { ConfigsService } from './configs.service';
import { Board } from '../models/board/board.model';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  url: string = 'https://api.trello.com';
  key: string;
  token: string;
  boardId: string = '596b7bc8f0379d3c16b53a94';
  board: Array<Board> = [];
  boards: EventEmitter<Array<Board>> = new EventEmitter();

  constructor(private http: HttpClient, private configService: ConfigsService) {
    this.key = this.configService.key;
    this.token = this.configService.token;
  }

  getBoards() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    return this.http.get(`${this.url}/1/members/me/boards`, {headers: headers, params: params}).toPromise();
    // this.http.get(`${this.url}/1/members/me/boards`, {headers: headers, params: params}).subscribe( data => {
    //   console.log(data)
    //   data.map((board, i) => {
    //     console.log(board)
    //     this.board.push(new Board(board.id, board.name));
    //   });
    // });
    // this.boards.emit(this.board);
  }

  getCards() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    return this.http.get(`${this.url}/1/boards/${this.boardId}/cards`, {headers: headers, params: params}).toPromise();
    // this.http.get(`${this.url}/1/boards/${this.boardId}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
  }

  getLists() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('key', this.key).set('token', this.token);
    return this.http.get(`${this.url}/1/boards/${this.boardId}/lists`, {headers: headers, params: params}).toPromise();
    // this.http.get(`${this.url}/1/boards/${this.boardId}/lists`, {headers: headers, params: params}).subscribe(data => console.log(data));
  }

  getCard() {
    const headers = new HttpHeaders();
    const params = new HttpParams().set('fields', 'id,name,badges,labels');
    this.http.get(`${this.url}/1/lists/${this.boardId}/cards`, {headers: headers, params: params}).subscribe(data => console.log(data));
  }
}
