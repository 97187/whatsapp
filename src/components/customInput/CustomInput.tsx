import {View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';
import {Styles} from '../../utils/theme/styles/Styles';

const CustomInput = ({
  label,
  onChangeText,
}: {
  label: string;
  onChangeText: any;
}) => {
  return (
    <View style={Styles.textInputContainer}>
      <TextInput
        style={Styles.textInput}
        label={label}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInput;
