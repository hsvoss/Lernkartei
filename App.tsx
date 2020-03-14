import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DeckList} from "./components/deck_list/DeckList";
import StatusBarWrapper from "./components/shared/StatusBarWrapper";
import {SingleDeck} from "./components/deck_list/SingleDeck";
import {DeckPreview} from "./components/individual_deck/DeckPreview";
import {NewDeck} from "./components/new_deck/NewDeck";
import {NewQuestion} from "./components/new_question/NewQuestion";
import {QuizQuestion} from "./components/quiz/QuizQuestion";
import {QuizResult} from "./components/quiz/QuizResult";
import TextButton from "./components/shared/TextButton";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBarWrapper backgroundColor={'lightblue'}/>
            <DeckList/>
            <SingleDeck/>
            <DeckPreview/>
            <NewDeck/>
            <NewQuestion/>
            <QuizQuestion/>
            <QuizResult/>
            <TextButton onPress={event => {console.log("Hallo Welt", event)}}>Hallo Welt</TextButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
