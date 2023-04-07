import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexScreen() {
  return (
    <View style={
      styles.container
    }>
      <Text style={styles.boxOne}>Box 1</Text>
      <Text style={styles.boxTwo}>Box 2</Text>
      <Text style={styles.boxThree}>Box 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 400,
    // width: 400,
    backgroundColor: "#28C4D9",

    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    // alignSelf: "center",
    flexWrap: "wrap",


  },
  boxOne: {
    // alignSelf: "center",
    // flex: 1, // 3+2+1 = 6 -> 3/6 => 100% of the screen
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
    // width: 100,
    // height: 100
  },
  boxTwo: {
    // flex: 2,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
    // width: 100,
    // height: 100
    // alignSelf: "flex-start"
  },
  boxThree: {
    // flex: 1,
    borderWidth: 2,
    borderColor: "white",
    fontSize: 30,
    // width: 100,
    // height: 100
    // alignSelf: "flex-end",
  }
});