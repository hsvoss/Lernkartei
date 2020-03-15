import React from "react";
import {StyleSheet, Text, View} from "react-native"
import TextButton from "../shared/TextButton";


export function DeckList() {
  return <View style={styles.container}>
    <Text>DeckList</Text>
    <TextButton onPress={() => {
      // console.log(getData());
    }}>Press Me</TextButton>
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
