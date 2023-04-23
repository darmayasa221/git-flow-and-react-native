import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import DemoOutput from './src/components/Demo/DemoOutput';
import {ButtonComponent} from './src/components/UI/ButtonComponent';

const App = () => {
  console.log('RUNING APP');
  const [showPharagrap, setShowPharagrap] = useState(false);
  const toggleShowPharagrapHandler = () => {
    setShowPharagrap(prev => !prev);
  };
  return (
    <View>
      <SafeAreaView />
      <Text>Hello World</Text>
      <ButtonComponent
        title="Toggle Pharagrap"
        onPress={toggleShowPharagrapHandler}
      />
      {showPharagrap && <Text>show pharagrap</Text>}
      <DemoOutput isActive={true} />
    </View>
  );
};

export default App;
