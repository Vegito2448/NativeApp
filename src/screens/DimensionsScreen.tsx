import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
// const { width, height } = Dimensions.get('window');
export const DimensionsScreen = () => {
  const { width, height } = useWindowDimensions();
  console.log("🚀 ~ file: DimensionsScreen.tsx:3 ~ height:", height);
  console.log("🚀 ~ file: DimensionsScreen.tsx:3 ~ width:", width);
  return (
    <View>
      <View style={styles.container}>
        <View style={{
          ...styles.purpleBox,
          width: width * 0.2,
        }}>
        </View>
        <View style={styles.orangeBox}>
        </View>
      </View>
      <Text style={styles.title}>Width: {width} Height: {height}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: "50%",
    height: "50%",
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  title: {
    fontSize: 20,
  }
});