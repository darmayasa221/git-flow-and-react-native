import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import DemoOutput from './src/components/Demo/DemoOutput';
import ButtonComponent from './src/components/UI/ButtonComponent';
import DemoList from './src/components/Demo/DemoList';

const App = () => {
  console.log('RUNING APP');
  const [showPharagrap, setShowPharagrap] = useState(false);
  const [title, setTitle] = useState('new Tile');
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
  const toggleChangeTitleHandler = useCallback(() => {
    setTitle(() => 'title change');
  }, []);
  const dataMemo = useMemo(() => {
    console.log('data memo app');
    return [1, 2, 3, 4, 5, 6, 7, 3, 2, 4, 7, 0];
  }, []);
  return (
    <View>
      <SafeAreaView />
      <Text>Hello World</Text>
      <ButtonComponent
        title="Toggle Pharagrap"
        onPress={toggleShowPharagrapHandler}
      />
      <ButtonComponent
        title="Toggle Title"
        onPress={toggleChangeTitleHandler}
      />
      {showPharagrap && <Text>show pharagrap</Text>}
      <DemoOutput isActive={true} />
      <DemoList data={dataMemo} title={title} />
    </View>
  );
};

export default App;
