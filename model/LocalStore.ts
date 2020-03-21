import {Deck} from "./Deck";
import {AsyncStorage} from 'react-native';

export class LocalStore {
  decks: Map<string, Deck>;

  static storeData = async (textInput: string) => {
    try {
      await AsyncStorage.setItem('@Lernkartei', textInput)
    } catch (e) {
      // saving error
    }
  };

  static getData = async () => {
    try {
      return await AsyncStorage.getItem('@Lernkartei')
    } catch (e) {
      console.log("AsyncStorage", e)
    }
  }


}

