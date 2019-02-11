import { TrelloService } from './trello-service.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Card } from '../models/card/card.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

// interface Card {
//     Card: any
// }
@Injectable()
export class CardResolver implements Resolve<Card> {
    constructor(private trelloService: TrelloService){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Card {
        console.log(route.params)
        return this.trelloService.findCard(route.params['id']);
    }
}