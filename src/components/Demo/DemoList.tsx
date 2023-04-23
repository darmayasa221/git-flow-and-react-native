import React, {FC, memo, useMemo} from 'react';
import {Text, View} from 'react-native';

const DemoList: FC<{title: string; data: Array<number>}> = ({data, title}) => {
  const sortedMemo = useMemo(() => {
    console.log('SORTED MEMO');
    return data.sort((a, b) => a - b);
  }, [data]);
  // const sorted = data.sort((a, b) => a - b);
  console.log('DEMOLIST COMPONENT');
  return (
    <View>
      <Text>{title}</Text>
      {sortedMemo.map((value, index) => (
        <Text key={index}>{value}</Text>
      ))}
    </View>
  );
};

export default memo(DemoList);
