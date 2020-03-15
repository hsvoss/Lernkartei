import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {DeckList} from "../deck_list/DeckList";
import {SingleDeck} from "../deck_list/SingleDeck";
import {DeckPreview} from "../individual_deck/DeckPreview";
import {NewDeck} from "../new_deck/NewDeck";
import {NewQuestion} from "../new_question/NewQuestion";
import {QuizQuestion} from "../quiz/QuizQuestion";
import {QuizResult} from "../quiz/QuizResult";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => <Tab.Navigator>
    <Tab.Screen name="DeckList" component={DeckList}/>
    <Tab.Screen name="NewDeck" component={NewDeck}/>
</Tab.Navigator>;

export function Navigation() {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName={"TabNavigator"}>
            <Stack.Screen name="TabNavigator" component={TabNavigator}
                          options={{headerStyle: {height: 0}, headerTitle: ""}}/>
            <Stack.Screen name="SingleDeck" component={SingleDeck}/>
            <Stack.Screen name="DeckPreview" component={DeckPreview}/>
            <Stack.Screen name="NewQuestion" component={NewQuestion}/>
            <Stack.Screen name="QuizQuestion" component={QuizQuestion}/>
            <Stack.Screen name="QuizResult" component={QuizResult}/>
        </Stack.Navigator>
    </NavigationContainer>
}

