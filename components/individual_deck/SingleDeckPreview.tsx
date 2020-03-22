import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {black, centerWhite, gray} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";

export function SingleDeckPreview({route, navigation}) {
  const {deckTitel, nrOfCards}: { deckTitel: string, nrOfCards: string } = route.params;

  return (
    <View style={centerWhite.container}>
      <Card>
        <Text style={styles.header}>{deckTitel}</Text>
        <Text style={styles.cardNr}>{nrOfCards}</Text>
      </Card>
      <TextButton onPress={() => {
      }} buttonStyle="primary">
        Add Card
      </TextButton>
      <TextButton onPress={() => {
      }} buttonStyle="secondary">
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
    color: gray,
    textAlign: "center"
  }
});
