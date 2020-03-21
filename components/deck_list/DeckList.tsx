import React from "react";
import {StyleSheet, Text, View} from "react-native"
import TextButton from "../shared/TextButton";
import {addQestionToDeck, getDeck, newDeck, restoreData} from "../../model/LocalStore";
import {Deck} from "../../model/Deck";
import {Question} from "../../model/Question";


export class DeckList extends React.Component<{navigation}> {

  state = {
    deck: null
  };

  async componentDidMount() {
    await restoreData();
    let deck: Deck | null = await getDeck('test');
    this.setState({deck: deck})
    this.props.navigation.navigate('NewQuestion');
  }

  render() {
    return <View style={styles.container}>
      <Text>DeckList</Text>
      {this.state.deck === undefined || this.state.deck === null
        ? <Text>Deck is undefined</Text>
        : <Text>{JSON.stringify(this.state.deck)}</Text>}
      <TextButton onPress={async () => {
        await newDeck('test');
        await addQestionToDeck('test', new Question('frageA', 'antwortA'));
        await addQestionToDeck('test', new Question('frageB', 'antwortB'));
      }
      }>Store Text</TextButton>
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
