import {Alert, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {firebase} from '@react-native-firebase/firestore';
import CustomInput from '../../components/customInput/CustomInput';
import CustomButton from '../../components/customButton/CustomButton';
import {Styles} from '../../utils/theme/styles/Styles';
import Label from '../../components/label/Label';
import {useNavigation} from '@react-navigation/native';

const AddData = ({route}) => {
  const {uid} = route.params;
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const navigation = useNavigation();

  const addDatatoDatabase = async () => {
    try {
      const db = firebase.firestore();
      const usersCollection = db.collection('users');

      const userData = {
        uid: uid,
        name: name,
        email: email,
        age: age,
      };

      await usersCollection.add(userData);
      navigation.replace('Homescreen');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <SafeAreaView style={Styles.safeFlex}>
      <KeyboardAvoidingView behavior="position">
        <Label text="Name" />
        <CustomInput
          label="Enter Name"
          onChangeText={(e: string) => setName(e)}
        />
        <Label text="Email" />
        <CustomInput
          label="Enter Email"
          onChangeText={(e: string) => setEmail(e)}
        />
        <Label text="Age" />
        <CustomInput
          label="Enter Age"
          onChangeText={(e: string) => setAge(e)}
        />
        <CustomButton onPress={addDatatoDatabase} title={'Submit'} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddData;
