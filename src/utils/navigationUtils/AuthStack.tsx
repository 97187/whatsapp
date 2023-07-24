import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../../screens/Homescreen/Homescreen';
import LoginStack from './LoginStack';
import Chat from '../../screens/chat/Chat';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="WhatsApp"
          component={Homescreen}
          options={{
            headerStyle: {
              backgroundColor: '#128C7E',
            },
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: '',
            headerLeft: () => (
              <>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{
                    marginLeft: -10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons name="arrow-back" size={27} color="white" />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: 'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    marginLeft: 10,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  Name
                </Text>
              </>
            ),
            headerStyle: {
              backgroundColor: '#128C7E',
            },
            // headerTintColor: '#FFFFFF',
            // headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Logout" component={LoginStack} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  img: {width: 60, height: 60, borderRadius: 30, backgroundColor: 'green'},
  text: {
    fontSize: 18,
    marginLeft: 15,
  },
  mycard: {
    flexDirection: 'row',
    margin: 3,
    padding: 4,
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
});
