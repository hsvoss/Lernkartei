import {StatusBar, View} from "react-native";
import Constants from "expo-constants";
import React from "react";

export default function StatusBarWrapper({backgroundColor, ...props}: { backgroundColor: string }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>)
}
