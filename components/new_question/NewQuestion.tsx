import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from "react-native";
import {blue, white} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import Card from "../shared/Card";
import {addQestionToDeck} from "../../model/LocalStore";

export function NewQuestion({route, navigation}) {
  const [questionText, onChangeQuestion] = React.useState('');
  const [answerText, onChangeAnswer] = React.useState('');
  const {deckTitel}: { deckTitel: string } = route.params;

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
          value={questionText}
        />
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeAnswer(text)}
          placeholder={"Answer"}
          value={answerText}
        />
      </Card>
      <TextButton enabled={questionText !== '' && answerText !== ''} onPress={async () => {
        await addQestionToDeck(deckTitel, questionText, answerText);
        navigation.navigate('SingleDeckPreview', {deckTitel: deckTitel})
      }}>Submit</TextButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

