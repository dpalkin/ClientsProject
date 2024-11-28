import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

export default function HeaderArea({ placeholder, value, onChangeText }) {
  return (
    <View style={{marginHorizontal: 24}}>
      <Text style={styles.textHeader}>Клиенты</Text>
      <View style={styles.search}>
        <Image
          style={styles.searchImage}
          source={require('../../../assets/SearchIcon.png')}
        />
        <TextInput
          style={styles.inputBox}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={"#A3A3A3"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 34,
    fontWeight: 700,
    marginTop: 46,
  },
  search: {
    height: 44,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24
  },
  searchImage: {
    height: 24,
    width: 24,
    marginLeft: 12,
  },
  inputBox: {
    marginLeft: 8,
    color: '#A3A3A3',
  },
});
