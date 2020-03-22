import {Deck} from "./Deck";
import {AsyncStorage} from 'react-native';
import {Question} from "./Question";


let decks;
const decksKey = 'AllDecksOfLernkartei';

export const restoreData = async (): Promise<void> => {
  try {
    const loadedString: string = await AsyncStorage.getItem(decksKey);
    if (loadedString === null) {
      decks = {};
    } else {
      decks = JSON.parse(loadedString);
    }
  } catch (e) {
    console.log('Can not restore data. The data will be reset', e)
  }
};

const saveData = async (): Promise<void> => {
  let stringify: string = JSON.stringify(decks);
  await AsyncStorage.setItem(decksKey, stringify)
};

export const resetData = async (): Promise<void> => {
  decks = {};
  await saveData();

};


export let getDeck: (deckTitel: string) => Deck = (deckTitel: string) => {
  return decks[deckTitel];
};

export const newDeck = async (deckTitel: string): Promise<void> => {
  decks[deckTitel] = new Deck(deckTitel);
  await saveData();
};

export const containsDeck: (deckTitel: string) => boolean = (deckTitel: string) => {
  return decks.hasOwnProperty(deckTitel);
};

export const addQestionToDeck = async (deckTitel: string, questionText: string, answerText: string): Promise<void> => {
  decks[deckTitel].questions.push(new Question(questionText, answerText));
  await saveData();
};

export const getAllDecks = (): { deckTitel: string, nrOfCards: string }[] => {
  return Object.keys(decks).map((key: string) => {
    const deck: Deck = decks[key];
    return {
      deckTitel: deck.deckTitel,
      nrOfCards: deck.questions.length.toString().concat(" ", deck.questions.length === 1 ? 'card' : 'cards')
    }
  })

};



