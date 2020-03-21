import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {blue, white} from './StylesAndColors';


export default function TextButton({children, onPress, style = {}}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.androidSubmitBtn, style]}
    >
      <Text style={styles.submitBtnText}>{children}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: blue
  },
  androidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 2,
    height: 45,
    marginLeft: 30,
    marginRight: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },

});
