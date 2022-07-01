import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import RoundButton from './src/common/RoundButton';
import EmployeeForm from './src/components/EmployeeForm';
import {validateInput} from './src/utils/helpers';
const App = () => {
  const [DataArray, setDataArray] = useState([]);

  const onInputChange = (empNo, field, data) => {
    let tempDataArray = [...DataArray];
    tempDataArray[empNo][field] = data;
    setDataArray(tempDataArray);
  };

  const onValidate = empNo => {
    let tempDataArray = [...DataArray];
    let newObject = validateInput(tempDataArray[empNo]);
    tempDataArray[empNo] = {...newObject};
    setDataArray(tempDataArray);
  };

  const addElement = () => {
    let tempDataArray = [...DataArray];
    tempDataArray.push({
      name: '',
      email: '',
      password: '',
      isNameValid: false,
      isEmailValid: false,
      isPasswordValid: false,
    });
    setDataArray(tempDataArray);
  };

  const removeElement = () => {
    let tempDataArray = [...DataArray];
    tempDataArray.pop();
    setDataArray(tempDataArray);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          flex: 0.075,
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <RoundButton onPress={removeElement} title={'-'} />
        <RoundButton onPress={addElement} title={'+'} />
      </View>
      <ScrollView style={{flex: 0.9}}>
        {DataArray.map((element, index) => {
          return (
            <EmployeeForm
              data={element}
              key={`emp ${index}`}
              onInputChange={(field, data) => onInputChange(index, field, data)}
              onValidate={() => onValidate(index)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
