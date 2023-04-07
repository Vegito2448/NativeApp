import { StyleSheet, Text, View } from 'react-native';

export default function Positions() {
  return (
    <View style={styles.container}>
      <View style={
        styles.purpleBox
      } />
      <View style={
        styles.orangeBox
      } />
      <View style={
        styles.greenBox
      } />
      <Text style={styles.title}>Positions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
    // flex: 1,

    // justifyContent: 'center',
    height: 400,
    width: 400,

  },
  purpleBox: {
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    height: 100,
    width: 100,
    // top: 0,
    // bottom: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    height: 100,
    width: 100,
    position: 'absolute',
    // top: 10,
    bottom: 0,
    right: 0,
  },
  greenBox: {
    backgroundColor: '#26de81',
    borderWidth: 10,
    borderColor: 'white',
    // height: 100,
    // width: 100,
    // ...StyleSheet.absoluteFillObject, // This is the same as the 4 lines below
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // right: 0,
    // left: 0,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: "400",
  }
});