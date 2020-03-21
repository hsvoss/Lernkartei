import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {
  blue,
  centerWhite,
  white,
  black,
  gray, green, red
} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";

export function QuizQuestion() {
  return (
    <View style={centerWhite.container}>
      <Card>
        <Text style={styles.header}>Does React Native work with Android?</Text>
      </Card>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.reset}>Show Answer</Text>
      </TouchableOpacity>
      <TextButton onPress={() => {}} buttonStyle="primary" style={{backgroundColor: green}}>
        Correct
      </TextButton>
      <TextButton onPress={() => {}} buttonStyle="primary" style={{backgroundColor: red}}>
        Wrong
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({
  reset: {
    color: blue
  },
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
