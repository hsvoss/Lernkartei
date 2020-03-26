import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {black, centerLightGrey, lightgrey} from "../shared/StylesAndColors";
import {QuizSingeView} from "./QuizSingeView";
import {getDeck} from "../../model/LocalStore";
import TextButton from "../shared/TextButton";

export function QuizQuestion({route, navigation}) {
  const {deckTitel}: { deckTitel: string } = route.params;
  const deck = getDeck(deckTitel);


  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [iterator, setIterator] = useState(0);


  const handleCorrect = () => {
    setCorrectAnswers(correctAnswers + 1);
    setIterator(iterator + 1);
  };

  const handleWrong = () => {
    setIterator(iterator + 1);
  };

  const startOver = () => {
    setCorrectAnswers(0);
    setIterator(0);
  };

  return (
    <View style={centerLightGrey.container}>
      {deck.questions.length > iterator && <QuizSingeView
        correctAnswers={correctAnswers}
        remaining={deck.questions.length}
        questionText={deck.questions[iterator].questionText}
        answerText={deck.questions[iterator].answerText}
        onCorrect={() => handleCorrect()}
        onWrong={() => handleWrong()}
      />}
      {deck.questions.length <= iterator && <View style={styles.container}>
        <Text style={styles.score}>You scored:</Text>
        <Text style={styles.score}>{correctAnswers} / {iterator}</Text>
        <TextButton style={styles.button} buttonStyle={'secondary'} onPress={() => startOver()}>Start over</TextButton>
        <TextButton style={styles.button} onPress={() => navigation.goBack()}>Back to Deck</TextButton>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightgrey,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  score: {
    fontSize: 40,
    color: black,
    textAlign: "center"
  },
  button: {
    width: 160
  },
});
