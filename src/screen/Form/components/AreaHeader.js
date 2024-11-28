import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';

export default function HeaderArea({ onPress }) {
  return (
    <View style={styles.headerBox}>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={onPress}>
        <Image
          style={styles.headerIcon}
          source={require('../../../assets/ArrayLeftIcon.png')}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Добавить нового</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    height: 42,
    alignItems: 'center',
    marginTop: 46,
  },
  iconBox: {
    height: 44,
    width: 44,
  },
  headerIcon: {
    height: 44,
    width: 44,
  },
  headerText: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 63,
  },
});
