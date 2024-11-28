import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import ChatButton from './components/ChatButton.js';
import CallButton from './components/CallButton.js';
import SeeMoreButton from './components/SeeMoreButton.js';
import Avatar from './components/Avatar';
import TopButton from './components/TopButton.js';
import Bio from './components/Bio';

export default function Profile({ navigation, route }) {
  const {client} = route.params;
 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <TopButton onPress={() => navigation.goBack()} />
      <Avatar source={client.photoLink} name={client.name} city={client.city} />
      <View style={styles.buttonContainer}>
        <ChatButton />
        <View style={styles.space} />
        <CallButton />
      </View>
      <Bio bio={client.bio} />
      <SeeMoreButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginHorizontal: 24,
  },
  space: {
    width: 8,
  },
});
