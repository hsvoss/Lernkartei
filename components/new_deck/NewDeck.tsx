import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput} from "react-native";
import {blue, white} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";

export function NewDeck() {
  const [value, onChangeText] = React.useState();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled
      keyboardVerticalOffset={10}
    >
      <Text style={styles.header}>Whats your title for your new deck?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => onChangeText(text)}
        placeholder={"Name your new deck!"}
        value={value}
      />
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
    fontSize: 40,
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
