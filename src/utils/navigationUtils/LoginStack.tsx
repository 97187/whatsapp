import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../../screens/Homescreen/Homescreen';
import AddData from '../../screens/Login/AddData';
import LoginScreen from '../../screens/Login/LoginScreen';
import VerifyOTP from '../../screens/Login/VerifyOTP';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Verify" component={VerifyOTP} />
      <Stack.Screen name="AddData" component={AddData} />
      <Stack.Screen name="Homescreen" component={Homescreen} />
    </Stack.Navigator>
  );
};

export default LoginStack;
