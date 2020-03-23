import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {SingleDeckPreview} from "../individual_deck/SingleDeckPreview";
import {NewDeck} from "../new_deck/NewDeck";
import {NewQuestion} from "../new_question/NewQuestion";
import {QuizQuestion} from "../quiz/QuizQuestion";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DeckView} from "../deck_list/DeckView";
import {white} from "./StylesAndColors";
import {Entypo, MaterialCommunityIcons} from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigator = () => <Tab.Navigator
  tabBarOptions={{activeBackgroundColor: white, inactiveBackgroundColor: white}}>
  <Tab.Screen name="DeckList" component={DeckView} options={{
    title: 'My Decks',
    tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="cards-outline" size={size} color={color}/>)
  }}/>
  <Tab.Screen name="NewDeck" component={NewDeck} options={{
    title: 'New Deck',
    tabBarIcon: ({color, size}) => (<Entypo name="new-message" size={size} color={color}/>)
  }}/>
  {/*<Tab.Screen name="MockView" component={MockView} options={{*/}
  {/*  title: 'Mock View',*/}
  {/*  tabBarIcon: ({color, size}) => (<Entypo name="new" size={size} color={color}/>)*/}
  {/*}}/>*/}
</Tab.Navigator>;

export function Navigation() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={"TabNavigator"}>
      <Stack.Screen name="TabNavigator" component={TabNavigator}
                    options={{headerStyle: {height: 0}, headerTitle: ""}}/>
      <Stack.Screen name="SingleDeckPreview" component={SingleDeckPreview} options={{headerTitle: 'Deck'}}/>
      <Stack.Screen name="NewQuestion" component={NewQuestion} options={{headerTitle: 'Add a card'}}/>
      <Stack.Screen name="QuizQuestion" component={QuizQuestion} options={{headerTitle: 'Quiz'}}/>
    </Stack.Navigator>
  </NavigationContainer>
}

