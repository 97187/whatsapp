import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../../components/customButton/CustomButton';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const navigation = useNavigation();

  const handlePhoneNumberChange = (number: string) => {
    setPhoneNumber(number);
  };

  const handleSendOTP = async () => {
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(
        phoneNumber,
      );
      navigation.replace('Verify', {confirmation: confirmationResult});
      Alert.alert('OTP Sent!');
    } catch (error: any) {
      Alert.alert('Something unusual occured');
      console.log(error.Error);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.safeAreaContainer} behavior="padding">
      <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Signin To Whatsapp</Text>
        <Image
          source={require('../../assets/images/whatsapp.png')}
          style={styles.image}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.label}>Phone Number:</Text>
        <PhoneInput
          ref={phoneInput}
          defaultValue={phoneNumber}
          defaultCode="IN"
          layout="first"
          withShadow
          autoFocus
          containerStyle={styles.phoneContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={handlePhoneNumberChange}
        />

        <CustomButton title={'Confirm'} onPress={handleSendOTP} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 22,
    color: 'green',
  },
  phoneContainer: {
    width: '75%',
    height: 50,
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default LoginScreen;
