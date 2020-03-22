import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {blue, white} from "./StylesAndColors";

export default function TextButton({children, onPress, style = {}, buttonStyle = "primary"}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyle === "primary" ? styles.primaryBtn : styles.secondaryBtn,
        style
      ]}
    >
      <Text
        style={
          buttonStyle === "primary"
            ? styles.primaryBtnText
            : styles.secondaryBtnText
        }
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: blue
  },
  primaryBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 2,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  primaryBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  secondaryBtn: {
    backgroundColor: white,
    borderColor: blue,
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  secondaryBtnText: {
    color: blue,
    fontSize: 22,
    textAlign: "center"
  }
});
