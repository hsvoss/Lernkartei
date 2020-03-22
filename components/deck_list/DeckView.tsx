import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "../shared/Card";
import {black, gray} from "../shared/StylesAndColors";
import {getAllDecks, restoreData} from "../../model/LocalStore";

export function DeckView(props) {

  const [allDeacks, setAllDecks] = useState([]);

  useEffect(() => {
    const asyncRestoreData = async () => {
      await restoreData();
      setAllDecks(getAllDecks());
    };
    asyncRestoreData();
  });

  return (
    <View style={styles.container}>
      {allDeacks.map((deck: { deckTitel: string, nrOfCards: string }) =>
        <TouchableOpacity style={{alignSelf: 'stretch'}}
                          onPress={() => props.navigation.navigate('SingleDeckPreview', deck.deckTitel)}
                          key={deck.deckTitel}
        >
          <Card>
            <Text style={styles.header}>{deck.deckTitel}</Text>
            <Text style={styles.cardNr}>{deck.nrOfCards}</Text>
          </Card>
        </TouchableOpacity>
      )}

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
    color: gray,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
