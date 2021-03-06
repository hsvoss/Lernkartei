import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {black, centerLightGrey, grey, red} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";
import {deleteDeck, getOneDeckCards} from "../../model/LocalStore";
import {TouchableOpacity} from "react-native-gesture-handler";

export function SingleDeckPreview({route, navigation}) {
  const {deckTitel}: { deckTitel: string } = route.params;

  const [nrOfCards, setNrOfCards] = useState('0 cards');
  useEffect(() => {
    const {nrOfCards} = getOneDeckCards(route.params.deckTitel);
    setNrOfCards(nrOfCards);
  });

  return (
    <View style={centerLightGrey.container}>
      <Card>
        <Text style={styles.header}>{deckTitel}</Text>
        <Text style={styles.cardNr}>{nrOfCards}</Text>
      </Card>
      <TouchableOpacity onPress={async () => {
        await deleteDeck(deckTitel);
        navigation.navigate('DeckList')
      }}>
        <Text style={{color: red}}>delete this deck</Text>
      </TouchableOpacity>
      <TextButton onPress={() => {
        navigation.navigate('NewQuestion', {deckTitel: deckTitel})
      }} buttonStyle="primary">
        Add Card
      </TextButton>
      <TextButton onPress={() => {
        navigation.navigate('QuizQuestion', {deckTitel: deckTitel})
      }} buttonStyle="secondary" enabled={nrOfCards !== '0 cards'}>
        Start Quiz
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    color: black,
    textAlign: "center"
  },
  cardNr: {
    fontSize: 30,
    color: grey,
    textAlign: "center"
  }
});
