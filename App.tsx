/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { Counter } from './src/screens/Counter';
// import HelloWorldScreen from './src/screens/HelloWorldScreen';
import { SafeAreaView } from 'react-native';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
// import Positions from './src/screens/Positions';
// import FlexScreen from './src/screens/FlexScreen';
import TaskScreen from './src/screens/TaskScreen';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{
      // height: 400,
      // width: 400,
      flex: 1,
    }}
    >
      {/* <HelloWorldScreen /> */}
      {/* <Counter /> */}
      {/* <BoxObjectModel /> */}
      {/* <DimensionsScreen /> */}
      {/* <Positions /> */}
      {/* <FlexScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  );
}

export default App;
