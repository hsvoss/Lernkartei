import React from "react";
import {View} from "react-native";
import {centerWhite} from "../shared/StylesAndColors";
import {QuizSingeView} from "./QuizSingeView";
import {getDeck} from "../../model/LocalStore";

export function QuizQuestion({route, navigation}) {
  const {deckTitel}: { deckTitel: string } = route.params;
  const deck = getDeck(deckTitel);
  let question = deck.questions[0];



  return (
    <View style={centerWhite.container}>
      <QuizSingeView
        questionText={question.questionText}
        answerText={question.answerText}
        onCorrect={() => console.log('Correct')}
        onWrong={() => console.log('Wrong')}
      />
    </View>
  );
}
