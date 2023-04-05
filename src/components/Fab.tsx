import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
interface Props {
  title: string,
  position?: 'bl' | 'br';
  onPress: () => void,
}
export const Fab = ({ title, onPress, position = 'br' }: Props) => {
  const ios =
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.fabLocation,
        (position === 'bl') ? styles.left : styles.right
      ]}
      onPress={onPress}
    >
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>;
  const android =
    <View
      style={[
        styles.fabLocation,
        (position === 'bl') ? styles.left : styles.right
      ]}
    >
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#0000001a', true, 25)}
        onPress={onPress}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View >;

  return (Platform.OS === 'ios') ? ios : android;
};
const styles = StyleSheet.create({
  fab: {
    backgroundColor: "#5856d6",
    borderRadius: 100,
    justifyContent: "center",
    height: 50,
    width: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  fabText: {
    alignSelf: "center",
    color: "white",
    // textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  fabLocation: {
    position: "absolute",
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  }
});