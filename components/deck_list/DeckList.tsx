import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native"
import TextButton from "../shared/TextButton";
import {LocalStore} from "../../model/LocalStore";


export class DeckList extends React.Component {

  state = {
    text: "",
    textInput: ""
  };

  componentDidMount(): void {
    LocalStore.getData()
      .then((value: string) => {
        this.setState({text: value})
      })
  }

  onChangeHandler = value => {
    this.setState({
      textInput: value
    });
  };

  render() {
    return <View style={styles.container}>
      <Text>DeckList</Text>
      <Text>{this.state.text}</Text>
      <TextInput
        value={this.state.textInput}
        placeholder={"Deck title here... "}
        onChangeText={value => this.onChangeHandler(value)}
      />
      <TextButton onPress={async () => {
        await LocalStore.storeData(this.state.textInput);
        // console.log(getData());
      }}>Store Text</TextButton>
    </View>

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-evenly",
    alignItems: "center"
  },
});
