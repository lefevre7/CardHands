import { Injectable } from "@angular/core";
import { Player } from "../model/player";
import { Card } from "../model/card";
import { Observable, of } from "rxjs";
import { CARDS } from "./card-deck";

@Injectable({ providedIn: "root" })
export class PlayerService {
  players: Player[] = [];
  cards: Card[];

  constructor() {
    this.cards = CARDS;
  }

  getPlayersWithCards(): Observable<Player[]> {
    return of(this.createPlayers());
  }

  getRandomCards(): Card[] {
    var playerCards: Card[] = [];
    var card: Card;
    for (var i = 0; i < 5; i++) {
      var randNum = Math.floor(Math.random() * this.cards.length);
      card = this.cards[randNum];
      this.cards.splice(randNum, 1);
      playerCards.push(card);
    }
    return playerCards;
  }

  createPlayers(): Player[] {
    // for (var i = 1; i < 5; i++) {
    //   var playerI = new Player("Player " + i, this.getRandomCards());
    //   this.players.push(playerI);
    // }
    for (var i = 1; i < 5; i++) {
      var playerI = new Player("Player " + i, []);
      this.players.push(playerI);
    }
    this.dealCards();
    return this.players;
  }

  dealCards(): void {
    for (var i = 0; i < 4; i++) {
      this.players[i].setCards(this.getRandomCards());
    }
  }
}
