import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from "react-native";
import {blue, white} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";

export function NewQuestion() {
  const [question, onChangeQuestion] = React.useState();
  const [answer, onChangeAnswer] = React.useState();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled
      keyboardVerticalOffset={10}
    >
      <Text style={styles.header}>Edit your card:</Text>
      <Card>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeQuestion(text)}
          placeholder={"Question"}
          value={question}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeAnswer(text)}
          placeholder={"Answer"}
          value={answer}
        />
      </Card>

      <TextButton onPress={() => {
      }}>Submit</TextButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    textAlign: "center"
  },
  input: {
    height: 40,
    borderColor: white,
    borderBottomColor: blue,
    borderWidth: 1,
    alignSelf: "stretch",
    margin: 20
  }
});

