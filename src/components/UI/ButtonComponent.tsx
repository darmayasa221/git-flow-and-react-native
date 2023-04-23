import React, {FC, memo} from 'react';
import {Button} from 'react-native';

const ButtonComponent: FC<{title: string; onPress: () => void}> = ({
  onPress,
  title,
}) => {
  console.log('BUTTON COMPONENT');
  return <Button title={title} onPress={onPress} />;
};

export default memo(ButtonComponent);
