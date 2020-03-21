import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {black, blue, centerWhite, green, red} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";
import CardFlip from 'react-native-card-flip';

export function QuizQuestion() {
  return (
    <View style={centerWhite.container}>
      <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
        <Card style={styles.card}>
          <Text style={styles.header}>Does React Native work with Android? Does React Native work with Android?</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.header}>Yes!</Text>
        </Card>
      </CardFlip>
      <TouchableOpacity onPress={() => {
        this.card.flip()
      }}>
        <Text style={styles.reset}>Show Answer</Text>
      </TouchableOpacity>
      <TextButton onPress={() => {
      }} buttonStyle="primary" style={{backgroundColor: green}}>
        Correct
      </TextButton>
      <TextButton onPress={() => {
      }} buttonStyle="primary" style={{backgroundColor: red}}>
        Wrong
      </TextButton>
    </View>
  );
}

const styles = StyleSheet.create({

  cardContainer: {
    // flex:1,
    width: 350,
    height: 300,
  },
  reset: {
    color: blue
  },
  card: {
    flex: 1
  }
  ,
  header: {
    fontSize: 40,
    color: black,
    textAlign: "center"
  },
});
