import {Question} from "./Question";

export class Deck {
  public deckTitel: string;
  public questions: Question[];

  constructor(deckTitel: string) {
    this.deckTitel = deckTitel;
    this.questions = [];
  }
}
