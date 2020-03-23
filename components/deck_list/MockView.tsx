import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import TextButton from "../shared/TextButton";
import {addQestionToDeck, getDeck, newDeck, resetData, restoreData} from "../../model/LocalStore";
import {Deck} from "../../model/Deck";


export function MockView({navigation}) {

  const [deck, setSteck] = useState(null);

  useEffect(() => {
    const asyncRestoreData = async () => {
      await restoreData();
      let deck: Deck | null = await getDeck('test');
      setSteck(deck);
    };
    asyncRestoreData();
  });

  return <View style={styles.container}>
    <Text>DeckList</Text>
    {deck === undefined || deck === null
      ? <Text>Deck is undefined</Text>
      : <Text>{JSON.stringify(deck)}</Text>}
    <TextButton onPress={async () => {
      await newDeck('test');
      await addQestionToDeck('test', 'frageA', 'antwortA');
      await addQestionToDeck('test', 'frageB', 'antwortB');
    }
    }>Store Text</TextButton>
    <TextButton onPress={async () => {
      await resetData();
    }
    }>Reset Data</TextButton>
  </View>


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-evenly",
    alignItems: "center"
  },
});
