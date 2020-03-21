import React from 'react';
import {View} from 'react-native';
import {Navigation} from "./components/shared/Navigation";
import StatusBarWrapper from "./components/shared/StatusBarWrapper";
import {blue} from "./components/shared/StylesAndColors";
import {restoreData} from "./model/LocalStore";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBarWrapper backgroundColor={blue}/>
      <Navigation/>
    </View>
  );
}



