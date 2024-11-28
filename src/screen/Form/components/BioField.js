import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function Bio({ label, placeholder, value, onChangeText }) {
  return (
    <View>
      <Text style={styles.paragrafText}>{label}</Text>
      <TextInput
        style={styles.inputBoxBio}
        placeholderTextColor="#A3A3A3"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paragrafText: {
    fontWeiht: 500,
    fontSize: 16,
    marginTop: 24,
    marginLeft: 40,
  },
  inputBoxBio: {
    height: 92,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    paddingLeft: 16,
    marginHorizontal: 24
  },
});
