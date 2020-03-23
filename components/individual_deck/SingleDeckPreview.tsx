import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {black, centerWhite, grey} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";
import {getOneDeckCards} from "../../model/LocalStore";

export function SingleDeckPreview({route, navigation}) {
  const {deckTitel, nrOfCards}: { deckTitel: string, nrOfCards: string } = getOneDeckCards(route.params.deckTitel);

  return (
    <View style={centerWhite.container}>
      <Card>
        <Text style={styles.header}>{deckTitel}</Text>
        <Text style={styles.cardNr}>{nrOfCards}</Text>
      </Card>
      <TextButton onPress={() => {
        navigation.navigate('NewQuestion', {deckTitel: deckTitel})
      }} buttonStyle="primary">
        Add Card
      </TextButton>
      <TextButton onPress={() => {
        navigation.navigate('QuizQuestion', {deckTitel: deckTitel})
      }} buttonStyle="secondary" enabled ={nrOfCards !== '0 cards'}>
        Take Quiz
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   justifyContent: "space-evenly",
  //   alignItems: "center"
  // },
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
