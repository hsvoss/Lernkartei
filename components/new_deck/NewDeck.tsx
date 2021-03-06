import React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from "react-native";
import {black, blue, lightgrey, red, white} from "../shared/StylesAndColors";
import TextButton from "../shared/TextButton";
import {containsDeck, newDeck} from "../../model/LocalStore";

export function NewDeck({navigation}) {
  const [newDeckName, changeNewDeckName] = React.useState('');

  let duplicateDeck: boolean = containsDeck(newDeckName);
  let isEmpty: boolean = newDeckName === '';

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled
      keyboardVerticalOffset={10}
    >
      <Text style={styles.header}>Whats your title for your new deck?</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.input}
          onChangeText={text => changeNewDeckName(text)}
          placeholder={"Name your new deck!"}
          value={newDeckName}
        />
      </View>

      {duplicateDeck && <Text style={{color: red}}>You already have a deck with this name.</Text>}
      <TextButton
        enabled={!(isEmpty || duplicateDeck)}
        onPress={() => {
          newDeck(newDeckName).then(() => {
            navigation.navigate('SingleDeckPreview', {
              deckTitel: newDeckName, randomParameterToForceRerender: Math.random()
            });
          });
          // navigation.navigate('SingleDeckPreview', {deckTitel: newDeckName});


          changeNewDeckName("");
        }}>Submit</TextButton>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: white,
    height: 150,
    justifyContent: "space-around",
    alignSelf: 'stretch',
    marginHorizontal: 20,
    alignContent: "center",
    padding: 10,
    borderColor: '#ddd',
    shadowColor: black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  },
  container: {
    flex: 1,
    backgroundColor: lightgrey,
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
    backgroundColor: white,
    borderBottomColor: blue,
    borderWidth: 1,
    alignSelf: "stretch",
    margin: 20
  }
});
