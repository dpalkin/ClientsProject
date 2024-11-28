import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function ButtonFooter({onPress}) {
  return (
     <TouchableOpacity style={styles.buttonFooter} onPress={onPress}>
        <Text style={styles.textFooter}>Добавить нового</Text>
      </TouchableOpacity>
   
  )
}

const styles=StyleSheet. create ({

  buttonFooter: {
    height: 52,
    marginHorizontal: 24,
    marginBottom: 44, 
    backgroundColor: '#FB7360',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 16,
  },
})