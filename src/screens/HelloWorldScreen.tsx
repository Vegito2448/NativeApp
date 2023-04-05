import { Text, View } from 'react-native';

function HelloWorldScreen(): JSX.Element {

  return (
    // View has per default a width and height of 0px
    <View style={{
      flex: 1,
      backgroundColor: "skyblue",
      justifyContent: "center",
    }} >
      <Text style={{
        fontSize: 50,
        textAlign: "center",
      }}>Hello World!!That's Incredible!
      </Text>
    </View>
  );
}

export default HelloWorldScreen;
