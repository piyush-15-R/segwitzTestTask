/**
 * @format
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const SubmitButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{'Submit'}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
