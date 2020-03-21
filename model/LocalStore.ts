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

export const addQestionToDeck = async (deckTitel: string, question: Question): Promise<void> => {
  debugger
  decks[deckTitel].questions.push(question);
  await saveData();
};




