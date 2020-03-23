import React from "react";
import {StyleSheet, View} from "react-native";
import {black} from "./StylesAndColors";

export default function Card({children, style = {}}) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "space-around",
    alignSelf: 'stretch',
    marginHorizontal: 20,
    alignContent: "center",
    padding: 10,
    borderColor: '#ddd',
    shadowColor: black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  }
});
