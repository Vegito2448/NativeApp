import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
  return (
    <View style={
      styles.container
    }>
      <Text style={
        styles.title
      }>BoxObjectModel</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#39a99d",
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: "#210248",
    fontWeight: 'bold',
    paddingHorizontal: 100,
    paddingTop: 15,
    marginHorizontal: 20,
    // width: 150,
    borderWidth: 10,
    // backgroundColor: 'skyblue',
  }
});