import {View, Text} from 'react-native';
import React from 'react';
import {Styles} from '../../utils/theme/styles/Styles';

const Label = ({text}: {text: string}) => {
  return (
    <View style={Styles.labelContainer}>
      <Text style={Styles.labelText}>{text}</Text>
    </View>
  );
};

export default Label;
