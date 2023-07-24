import React from 'react';
import {Button} from 'react-native-paper';
import {Styles} from '../../utils/theme/styles/Styles';

const CustomButton = ({onPress, title}: {onPress: any; title: string}) => {
  return (
    <Button
      mode="contained-tonal"
      buttonColor="#25D366"
      onPress={onPress}
      style={Styles.margin}>
      {title}
    </Button>
  );
};

export default CustomButton;
