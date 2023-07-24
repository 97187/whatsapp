import {Text, StyleSheet, LogBox, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/customButton/CustomButton';
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const VerifyOTP = ({route}: any) => {
  const navigation = useNavigation();
  const {confirmation} = route.params;
  const [otp, setOTP] = useState('');
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

  const handleVerifyOTP = async () => {
    if (!confirmation) {
      return;
    }
    const credential = auth.PhoneAuthProvider.credential(
      confirmation.verificationId,
      otp,
    );
    const userCredential = await auth().signInWithCredential(credential);
    console.log(userCredential.user);
    navigation.navigate('AddData', {uid: userCredential.user.uid});
  };

  return (
    <SafeAreaView>
      <>
        <Text style={styles.label}>OTP:</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => setOTP(e)}
          value={otp}
          keyboardType="numeric"
          mode="outlined"
          label={'Enter OTP'}
        />
        <CustomButton title={'Verify OTP'} onPress={handleVerifyOTP} />
      </>
    </SafeAreaView>
  );
};

export default VerifyOTP;

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
