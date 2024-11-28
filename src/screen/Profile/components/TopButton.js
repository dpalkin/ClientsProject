import React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function TopButton({onPress, navigation}) {
  return(
      <View style={styles.boxTop}>
        <TouchableOpacity style={styles.imageTop1} onPress={onPress}>
          <Image style={styles.imageTop1} source={require('../../../assets/ArrayLeftIcon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTop} onPress={() => navigation.navigate("Form")}>
          <Image style={styles.imageTop2} source={require('../../../assets/PencilIcon.png')}/>
        </TouchableOpacity>
      </View>
  )
}

const styles=StyleSheet.create({
  boxTop: {
    height: 42,
    marginTop: 46,
    marginHorizontal: 11,
    justifyContent: 'space-between',
    flexDirection: 'row',
   
  },
  buttonTop: {
    height: 44,
    width: 44,
    justifyContent: 'center'
  },
  imageTop1: {
    height: 44,
    width: 44,
  },
    imageTop2: {
    height: 44,
    width: 44,
    alignContent: 'center',
 
  }
  })