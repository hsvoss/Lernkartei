import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Navigation} from "./components/shared/Navigation";
import StatusBarWrapper from "./components/shared/StatusBarWrapper";
import {blue} from "./components/shared/StylesAndColors";
import {scheduleLocalNotification} from "./model/Notification";

export default function App() {

  useEffect(() => {
    scheduleLocalNotification();
  });

  return (
    <View style={{flex: 1}}>
      <StatusBarWrapper backgroundColor={blue}/>
      <Navigation/>
    </View>
  );
}



