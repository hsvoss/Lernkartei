import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import CardFlip from "react-native-card-flip";
import Card from "../shared/Card";
import React, {useState} from "react";
import {black, blue, green, lightgrey, red} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";

export function QuizSingeView({questionText, answerText, onCorrect, onWrong, correctAnswers, iterator}) {
  const [answerShown, setAnswerShown] = useState(true);

  return <View>
    <View style={styles.container}>
      <Text>{correctAnswers} / {iterator}</Text>
      <TouchableOpacity onPress={() => {
        setAnswerShown(!answerShown);
        this.card.flip()
      }}>
        <CardFlip style={styles.cardContainer} ref={card => (this.card = card)}>
          <Card style={styles.card}>
            <Text style={styles.header}>{questionText}</Text>
          </Card>
          <Card style={styles.card}>
            <Text style={styles.header}>{answerText}</Text>
          </Card>
        </CardFlip>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setAnswerShown(!answerShown);
        this.card.flip()
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
  container: {
    flex: 1,
    backgroundColor: lightgrey,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
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
