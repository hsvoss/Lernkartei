import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {MockView} from "../deck_list/MockView";
import {SingleDeckPreview} from "../individual_deck/SingleDeckPreview";
import {NewDeck} from "../new_deck/NewDeck";
import {NewQuestion} from "../new_question/NewQuestion";
import {QuizQuestion} from "../quiz/QuizQuestion";
import {QuizResult} from "../quiz/QuizResult";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {DeckView} from "../deck_list/DeckView";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => <Tab.Navigator>
  <Tab.Screen name="DeckList" component={DeckView}/>
  <Tab.Screen name="NewDeck" component={NewDeck}/>
  <Tab.Screen name="MockView" component={MockView}/>
</Tab.Navigator>;

export function Navigation() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={"TabNavigator"}>
      <Stack.Screen name="TabNavigator" component={TabNavigator}
                    options={{headerStyle: {height: 0}, headerTitle: ""}}/>
      <Stack.Screen name="SingleDeckPreview" component={SingleDeckPreview}/>
      <Stack.Screen name="NewQuestion" component={NewQuestion}/>
      <Stack.Screen name="QuizQuestion" component={QuizQuestion}/>
      <Stack.Screen name="QuizResult" component={QuizResult}/>
    </Stack.Navigator>
  </NavigationContainer>
}

