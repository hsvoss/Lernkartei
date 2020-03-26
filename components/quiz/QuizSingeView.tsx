import {Animated, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Card from "../shared/Card";
import React, {useState} from "react";
import {black, blue, green, lightgrey, red} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";

export function QuizSingeView({questionText, answerText, onCorrect, onWrong, correctAnswers, remaining}) {
  const [answerShown, setAnswerShown] = useState(true);

  const [questionRotation, setQuestionRotation] = useState(new Animated.Value(0));
  const [answerRotation, setAnswerRotation] = useState(new Animated.Value(Math.PI * 1.5));


  function showQuestion() {
    Animated.timing(questionRotation, {duration: 500, toValue: Math.PI / 2}).start();
    Animated.timing(answerRotation, {duration: 500, toValue: 0}).start();
  }

  function showAnswer() {
    Animated.timing(answerRotation, {duration: 500, toValue: Math.PI * 1.5}).start();
    Animated.timing(questionRotation, {duration: 500, toValue: Math.PI * 2}).start();
  }

  const flip = () => {
    if (answerShown) {
      showQuestion();
    } else {
      showAnswer();
    }
    setAnswerShown(!answerShown);
  };

  return <View>
    <View style={styles.container}>
      <Text>{correctAnswers} / {remaining}</Text>
      <TouchableOpacity style={styles.flipTouch} onPress={() => {
        flip()
      }}>
        <Animated.View style={[styles.flipCard, {
          transform: [
            {rotateY: questionRotation},
            {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
          ],
        }]}>
          <Card style={styles.card}>
            <Text style={styles.header}>{questionText}</Text>
          </Card>
        </Animated.View>
        <Animated.View style={[styles.flipCard, {
          transform: [
            {rotateY: answerRotation},
            {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
          ],
        }]}>
          <Card style={styles.card}>
            <Text style={styles.header}>{answerText}</Text>
          </Card>
        </Animated.View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        flip()
      }}>
        {answerShown && <Text style={styles.reset}>Show Answer</Text>}
        {!answerShown && <Text style={styles.reset}>Show Question</Text>}
      </TouchableOpacity>
      <TextButton
        onPress={() => onCorrect()}
        buttonStyle="primary"
        style={{backgroundColor: green, width: 300}}
      >
        Correct
      </TextButton>
      <TextButton
        onPress={() => onWrong()}
        buttonStyle="primary"
        style={{backgroundColor: red, width: 300}}
      >
        Wrong
      </TextButton>
    </View>
  </View>

}

const styles = StyleSheet.create({
  flipTouch: {
    width: 300,
    height: 200
  },
  flipCard: {
    position: 'absolute',
    padding: 0,
    backfaceVisibility: "hidden",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    width: 300,
  },
  container: {
    flex: 1,
    backgroundColor: lightgrey,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  reset: {
    color: blue
  },
  card: {
    flex: 1,
  }
  ,
  header: {
    fontSize: 40,
    color: black,
    textAlign: "center"
  },
});
