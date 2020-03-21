import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import {
  blue,
  centerWhite,
  white,
  black,
  gray
} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";

export function SingleDeckPreview() {
  return (
    <View style={centerWhite.container}>
      <Card>
        <Text style={styles.header}>Decktitel</Text>
        <Text style={styles.cardNr}>1 card</Text>
      </Card>
      <TextButton onPress={() => {}} buttonStyle="primary">
        Add Card
      </TextButton>
      <TextButton onPress={() => {}} buttonStyle="secondary">
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
