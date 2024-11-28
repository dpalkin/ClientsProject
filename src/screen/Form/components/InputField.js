import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export default function FieldInput({
  label,
  placeholder,
  value,
  onChangeText,
}) {
  return (
    <View>
      <Text style={styles.paragrafText}>{label}</Text>
      <TextInput
        style={styles.inputBox}
        placeholderTextColor="#A3A3A3"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  paragrafText: {
    marginLeft: 40,
    fontWeiht: 500,
    fontSize: 16,
    marginTop: 24,
    
  },
  inputBox: {
    height: 48,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    paddingLeft: 16,
    marginHorizontal: 24
  },
});
