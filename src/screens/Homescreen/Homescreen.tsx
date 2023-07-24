import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../components/customButton/CustomButton';
import {firebase} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

const Homescreen = () => {
  const [users, setUsers] = useState<null>(null);
  const navigation = useNavigation();
  // console.log(users);

  const signout = async () => {
    try {
      await firebase.auth().signOut();
      navigation.replace('Logout');
    } catch (e) {
      console.log(e);
    }
  };

  const getAllUser = async () => {
    const querySnap = await firestore().collection('users').get();
    const allUsers: FirebaseFirestoreTypes.DocumentData[] = querySnap.docs.map(
      docSnap => docSnap.data(),
    );
    setUsers(allUsers);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Chat', {
            name: item.name,
            uid: item.uid,
          })
        }>
        <View style={styles.mycard}>
          <Image
            source={{
              uri: 'https://cdn.vectorstock.com/i/preview-1x/32/12/default-avatar-profile-icon-vector-39013212.jpg',
            }}
            style={styles.img}
          />
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.email}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={users}
        renderItem={({item}) => {
          return <RenderCard item={item} />;
        }}
        keyExtractor={item => item.uid}
      />
      <CustomButton title="Logout" onPress={signout} />
    </SafeAreaView>
  );
};

export default Homescreen;

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
