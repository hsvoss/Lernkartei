import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "../shared/Card";
import {black, grey, white} from "../shared/StylesAndColors";
import {getAllDeckCards, restoreData} from "../../model/LocalStore";

export function DeckView({navigation}) {

  const [allDecks, setAllDecks] = useState([]);

  useEffect(() => {
    const asyncRestoreData = async () => {
      await restoreData();
      setAllDecks(getAllDeckCards());
    };
    asyncRestoreData();
  });

  return (
    allDecks.length === 0
      ? <View style={styles.emptyList}><Text>Please create your first Deck!</Text></View>
      : <ScrollView>
        {allDecks.map((deck: { deckTitel: string, nrOfCards: string }) =>
          <TouchableOpacity style={{alignSelf: 'stretch'}}
                            onPress={() => navigation.navigate('SingleDeckPreview', {
                              deckTitel: deck.deckTitel,
                            })}
                            key={deck.deckTitel}>
            <Card style={{margin: 15}}>
              <Text style={styles.header}>{deck.deckTitel}</Text>
              <Text style={styles.cardNr}>{deck.nrOfCards}</Text>
            </Card>
          </TouchableOpacity>
        )}
      </ScrollView>
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
  },
  emptyList: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
