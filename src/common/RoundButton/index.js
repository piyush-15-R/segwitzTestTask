/**
 * @format
 */

import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

const RoundButton = ({onPress, title, disabled = false}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled ? {backgroundColor: 'grey'} : null]}
      onPress={onPress}
      title={title}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;
