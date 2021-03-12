import { Card } from "./card";

export class Player {
  name: string;
  cards: Card[];

  constructor(name: string, cards: Card[]) {
    this.name = name;
    this.cards = cards;
  }

  setCards(cards: Card[]) {
    this.cards = cards;
  }
}
