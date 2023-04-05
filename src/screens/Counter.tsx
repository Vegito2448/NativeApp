import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/Fab';

export const Counter = () => {
  const [counter, setCounter] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab title="+1" onPress={() => setCounter((prevCounter) => prevCounter + 1)} />
      <Fab
        title="-1"
        onPress={() => setCounter((prevCounter) => prevCounter - 1)}
        position='bl'
      />
      {/* <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => { setCounter((prevCounter) => prevCounter - 1); }}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    // position: "absolute",
    top: -15,
    textAlign: "center",
  },
});