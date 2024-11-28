
import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function CallButton() {
   return (
      <View style={styles.lowerContainer}>
        <TouchableOpacity style={[styles.button, styles.lowerButton]}>
          <Text style={[styles.buttonText, styles.lowerText]}>Показать больше</Text>
          <View style={styles.space2}/>
          <Image style={styles.lowerIcon} source={require('../../../assets/ArrayDownIcon.png')}/>
        </TouchableOpacity>
      </View>

  )
}

  const styles = StyleSheet.create({
      button: {
    height: 52,
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600
  },
  lowerContainer: {
    marginTop: 40,
    marginHorizontal: 24,
    flexDirection: 'row'
  },
  lowerButton: {
    borderColor:'#FB7360',
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lowerText: {
    color: '#FB7360',
    marginRight: 4
  },
  space2: {
    width: 4
  },
  lowerIcon: {
    height: 24,
    width: 24
  
  }
  })