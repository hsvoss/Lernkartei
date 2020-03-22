import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native";
import Card from "../shared/Card";
import {black, grey} from "../shared/StylesAndColors";
import {getAllDecks, restoreData} from "../../model/LocalStore";

export function DeckView({navigation}) {

  const [allDeacks, setAllDecks] = useState([]);

  useEffect(() => {
    const asyncRestoreData = async () => {
      await restoreData();
      setAllDecks(getAllDecks());
    };
    asyncRestoreData();
  });

  return (
    <ScrollView>
      {allDeacks.map((deck: { deckTitel: string, nrOfCards: string }) =>
        <TouchableOpacity style={{alignSelf: 'stretch'}}
                          onPress={() => navigation.navigate('SingleDeckPreview', {
                            deckTitel: deck.deckTitel,
                            nrOfCards: deck.nrOfCards
                          })}
                          key={deck.deckTitel}
        >
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
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   justifyContent: "space-evenly",
  //   alignItems: "center"
  // }
});
