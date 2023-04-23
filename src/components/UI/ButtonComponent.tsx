import React, {FC} from 'react';
import {Button} from 'react-native';

export const ButtonComponent: FC<{title: string; onPress: () => void}> = ({
  onPress,
  title,
}) => {
  console.log('BUTTON COMPONENT');
  return <Button title={title} onPress={onPress} />;
};
