import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {User} from '../../utils/appUtils/Utils';
import LoginStack from '../../utils/navigationUtils/LoginStack';
import AuthStack from '../../utils/navigationUtils/AuthStack';

const StackNavigator = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth().onAuthStateChanged((data: any) => {
      if (data) {
        setUser(data);
      } else {
        console.log('User is signed out');
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {!user ? <LoginStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;
