import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {GiftedChat, Bubble, InputToolbar} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const Chat = ({route}) => {
  const {uid} = route.params;
  const userUid = 'RIr56i5jDuMbzmKDCiF9MrqbZ4l1';
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // getAllMessages()

    const docid = uid > userUid ? userUid + '-' + uid : uid + '-' + userUid;
    const messageRef = firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .orderBy('createdAt', 'desc');

    const unSubscribe = messageRef.onSnapshot(querySnap => {
      const allmsg: any = querySnap.docs.map(docSanp => {
        const data = docSanp.data();
        if (data.createdAt) {
          return {
            ...docSanp.data(),
            createdAt: docSanp.data().createdAt.toDate(),
          };
        } else {
          return {
            ...docSanp.data(),
            createdAt: new Date(),
          };
        }
      });
      setMessages(allmsg);
    });

    return () => {
      unSubscribe();
    };
  }, [uid]);

  const onSend = (messageArray: any[]) => {
    const msg = messageArray[0];
    const mymsg = {
      ...msg,
      sentBy: userUid,
      sentTo: uid,
      createdAt: new Date(),
    };
    setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg));
    const docid = uid > userUid ? userUid + '-' + uid : uid + '-' + userUid;

    firestore()
      .collection('chatrooms')
      .doc(docid)
      .collection('messages')
      .add({...mymsg, createdAt: firestore.FieldValue.serverTimestamp()});
  };

  return (
    <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <GiftedChat
        messages={messages}
        onSend={text => onSend(text)}
        user={{
          _id: userUid,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              wrapperStyle={{
                right: {
                  backgroundColor: 'green',
                },
              }}
            />
          );
        }}
        renderInputToolbar={props => {
          return (
            <InputToolbar
              {...props}
              containerStyle={{borderTopWidth: 1.5, borderTopColor: 'green'}}
            />
          );
        }}
      />
    </View>
  );
};

export default Chat;
