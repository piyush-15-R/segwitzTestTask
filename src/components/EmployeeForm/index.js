import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import * as CONST from '../../utils/Constants';
import SubmitButton from '../../common/SubmitButton';
import {styles} from './styles';
const EmployeeForm = ({onInputChange, data, onValidate}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <Text style={styles.heading}>{CONST.FORM_HEADING}</Text>
      <TextInput
        style={styles.input}
        value={data.name}
        placeholder="Name"
        onChangeText={e => onInputChange('name', e)}
      />
      <Text
        style={[
          styles.validationText,
          data.isNameValid ? styles.greenColor : styles.redColor,
        ]}>
        {data.isNameValid ? CONST.VALID_NAME : CONST.INVALID_NAME}
      </Text>
      <TextInput
        style={styles.input}
        value={data.email}
        placeholder="Email"
        onChangeText={e => onInputChange('email', e)}
      />
      <Text
        style={[
          styles.validationText,
          data.isNameValid ? styles.greenColor : styles.redColor,
        ]}>
        {data.isEmailValid ? CONST.VALID_EMAIL : CONST.INVALID_EMAIL}
      </Text>

      <View>
        <TextInput
          style={styles.input}
          value={data.password}
          secureTextEntry={!passwordVisible}
          placeholder="Password"
          onChangeText={e => onInputChange('password', e)}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
          style={styles.eyeButton}>
          <Image
            style={styles.eyeIcon}
            source={passwordVisible ? CONST.CROSSED_EYE_ICON : CONST.EYE_ICON}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={[
          styles.validationText,
          data.isNameValid ? styles.greenColor : styles.redColor,
        ]}>
        {data.isPasswordValid ? CONST.VALID_PASSWORD : CONST.INVALID_PASSWORD}
      </Text>
      <SubmitButton onPress={onValidate} />
    </View>
  );
};

export default EmployeeForm;
