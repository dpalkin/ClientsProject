import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function ClientItem({client, onPress}) {

  return(
    <>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.box, styles.shadow]}>
        <Image source={client.photoLink} style={styles.avatar}/>
        <View style={styles.text}>
          <Text style={styles.name}>{client.name}</Text>
          <Text style={styles.city}>{client.city}</Text>
        </View>
        <Image  style={styles.icon} source={require('../../../assets/ArrayRightIcon.png')}/>
      </View>
    </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 8
  },

  box: {
    borderWidth: 1,
    borderColor: '#F6F6F6',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    height: 92,
    borderRadius: 16,
  },
  shadow: {
    shadowColor: '#000',
    elevation: 4,
    shadowOffset: {
  	width: 4,
	  height: 4,
    },
  shadowOpacity: 0.1,
  shadowRadius: 1.00,
  },
  avatar: {
    height: 44,
    width: 44,
    marginLeft: 10
  },
  text: {
    height: 44,
    marginLeft: 10,
    flex: 1
  },
    name: {
      height: 24,
      fontSize: 16,
      fontWeight: '600'
    },
    city: {
      color: '#A3A3A3',
      lineHight: 24
    },
    icon: {
      marginRight: 15,
      width: 8,
      height: 14
    }
});