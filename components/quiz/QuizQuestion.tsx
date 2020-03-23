import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {black, centerWhite, white} from "../shared/StylesAndColors";
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

  return (
    <View style={centerWhite.container}>
      {deck.questions.length > iterator && <QuizSingeView
        correctAnswers={correctAnswers}
        iterator={iterator}
        questionText={deck.questions[iterator].questionText}
        answerText={deck.questions[iterator].answerText}
        onCorrect={() => handleCorrect()}
        onWrong={() => handleWrong()}
      />}
      {deck.questions.length <= iterator && <View style={styles.container}>
        <Text style={styles.score}>You scored:</Text>
        <Text style={styles.score}>{correctAnswers} / {iterator}</Text>
        <TextButton onPress={() => navigation.goBack()}>Back to Deck</TextButton>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  score: {
    fontSize: 40,
    color: black,
    textAlign: "center"
  },
});
