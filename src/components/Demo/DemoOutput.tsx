import React, {FC, memo} from 'react';
import {Text} from 'react-native';
const DemoOutput: FC<{isActive: boolean}> = ({isActive}) => {
  console.log('DEMO OUTPUT COMPONENT');
  return <Text>{isActive ? 'this is new' : ''} </Text>;
};

export default memo(DemoOutput);
