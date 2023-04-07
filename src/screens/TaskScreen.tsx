import { StyleSheet, View } from 'react-native';

export default function TaskScreen() {
  return (
    <View style={
      styles.container
    }>
      <View style={
        styles.purpleBox
      } />
      <View style={
        styles.orangeBox
      } />
      <View style={
        styles.blueBox
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',

    /* Tasks 1 */
    // justifyContent: 'space-between'

    /* Tasks 2 */
    // justifyContent: 'center',

    /* Tasks 3 */
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',
    // alignItems: 'center',

    /* Tasks 4 */
    // flexDirection: 'row-reverse',
    // justifyContent: 'space-between',

    /* Tasks 5 */
    // flexDirection: 'row',
    // justifyContent: 'space-between',

    /* Tasks 7,8,9,10 */
    // justifyContent: 'center',
    // alignItems: 'center',

    /* Tasks 10 */
    // flexDirection: 'row',
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    fontSize: 30,
    backgroundColor: "#5856D6",


    /* Tasks 3 */
    // position: 'absolute',
    // left: 0,
    // top: 265,

    /* Tasks 5 */
    // height: "100%",

    /* tasks 6 */
    // flex: 1,
    // width: "100%",

    /* Tasks 9 */
    // top: "12.1%",

    /* Tasks 9 */
    // top: "12.1%",
  },
  orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    fontSize: 30,
    backgroundColor: "#f0a23b",

    /* Tasks 1 */
    // flex: 1,

    /* Tasks 3 */
    // position: 'absolute',
    // right: 0,

    /* Tasks 4 */
    // alignSelf: 'center',

    /* Tasks 5 */
    // height: "100%",

    /* Tasks 6 */
    // flex: 1,
    // width: "100%",

    /* Tasks 8 */
    // alignSelf: 'flex-start',
    // left: "62%",

    /* Tasks 9 */
    // alignSelf: 'flex-start',
    // left: "62.1%",

    /* Tasks 10 */
    // top: "12%",

  },
  blueBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: "white",
    fontSize: 30,
    backgroundColor: "#28C4D9",

    /* Tasks 2 */
    // width: "100%"

    /* Tasks 3 */
    // position: 'absolute',
    // right: "40%",
    // bottom: 265,

    /* Tasks 4 */
    // alignSelf: 'flex-end',

    /* Tasks 5 */
    // height: "100%",

    /* Tasks 6 */
    // flex: 2,
    // width: "100%",
  },
});