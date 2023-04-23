import React, {useCallback, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import DemoOutput from './src/components/Demo/DemoOutput';
import ButtonComponent from './src/components/UI/ButtonComponent';

const App = () => {
  console.log('RUNING APP');
  const [showPharagrap, setShowPharagrap] = useState(false);
  // const toggleShowPharagrapHandler = () => {
  //   setShowPharagrap(prev => !prev);
  // };
  /**
   * why we need to use callback and why when we have been implement about memo on ButtonComponent still runing whenever we render the component
   * because javascript when not primitive value they can not use reguler === like true === true is a ture but when {} ===  {} its false
   * when const obj1 = {} and obj2 = obj1 , then obj1 === obj2 will ture
   * like props.obj === props.prev.obj === true
   */
  const toggleShowPharagrapHandler = useCallback(() => {
    setShowPharagrap(prev => !prev);
  }, []);
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
