import React from 'react';
import {View, Text, TextInput} from 'react-native';
import * as CONST from '../../utils/Constants';
import SubmitButton from '../../common/SubmitButton';
const EmployeeForm = ({onInputChange, data, onValidate}) => {
  return (
    <View>
      <View style={{borderColor: 'black', borderWidth: 10}} />
      <Text>{CONST.FORM_HEADING}</Text>
      <TextInput
        value={data.name}
        placeholder="Name"
        onChangeText={e => onInputChange('name', e)}
      />
      <Text>{data.isNameValid ? CONST.VALID_NAME : CONST.INVALID_NAME}</Text>
      <TextInput
        value={data.email}
        placeholder="Email"
        onChangeText={e => onInputChange('email', e)}
      />
      <Text>{data.isEmailValid ? CONST.VALID_EMAIL : CONST.INVALID_EMAIL}</Text>
      <TextInput
        value={data.password}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={e => onInputChange('password', e)}
      />
      <Text>
        {data.isPasswordValid ? CONST.VALID_PASSWORD : CONST.INVALID_PASSWORD}
      </Text>
      <SubmitButton onPress={onValidate} />
    </View>
  );
};

export default EmployeeForm;
