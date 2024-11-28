import React from 'react';
import {Image, Text, StyleSheet, View} from 'react-native';

export default function Avatar({ source, name, city }) {
  return(
      <View style={styles.headerBox}>
        <Image style={styles.imageAvatar} source={source}/>
        <Text style={styles.header}>{ name }</Text>
        <Text style={styles.textHeader}>{ city }</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  headerBox: {
    alignItems: 'center',
    marginTop: 8
  },
  imageAvatar: {
    width: 156,
    height: 156
  },
  header: {
    fontWeight: 700,
    fontSize: 24,
    marginTop: 16
  },
  textHeader: {
    fontWeight: 400,
    fontSize: 13,
    color: '#A3A3A3',
    marginTop: 4,
    marginHorizontal:165
  },
})