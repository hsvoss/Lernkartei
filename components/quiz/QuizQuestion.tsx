import React from "react";
import {View} from "react-native";
import {centerWhite} from "../shared/StylesAndColors";
import {QuizSingeView} from "./QuizSingeView";

export function QuizQuestion() {
  return (
    <View style={centerWhite.container}>
      <QuizSingeView
        questionText={"Does React Native work with Android?"}
        answerText={"Yes!"}
        onCorrect={() => console.log('Correct')}
        onWrong={() => console.log('Wrong')}
      />
    </View>
  );
}
