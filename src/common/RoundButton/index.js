/**
 * @format
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const RoundButton = ({onPress, title}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 1250,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 30,
      }}
      onPress={onPress}
      title={title}>
      <Text style={{fontSize: 18, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
