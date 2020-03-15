import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DeckList} from "./deck_list/DeckList";
import {SingleDeck} from "./deck_list/SingleDeck";
import {DeckPreview} from "./individual_deck/DeckPreview";
import {NewDeck} from "./new_deck/NewDeck";
import {NewQuestion} from "./new_question/NewQuestion";
import {QuizQuestion} from "./quiz/QuizQuestion";
import {QuizResult} from "./quiz/QuizResult";

const Stack = createStackNavigator();


export function Navigation() {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={"SingleDeck"}>
            <Stack.Screen name="DeckList" component={DeckList}/>
            <Stack.Screen name="SingleDeck" component={SingleDeck}/>
            <Stack.Screen name="DeckPreview" component={DeckPreview}/>
            <Stack.Screen name="NewDeck" component={NewDeck}/>
            <Stack.Screen name="NewQuestion" component={NewQuestion}/>
            <Stack.Screen name="QuizQuestion" component={QuizQuestion}/>
            <Stack.Screen name="QuizResult" component={QuizResult}/>
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
