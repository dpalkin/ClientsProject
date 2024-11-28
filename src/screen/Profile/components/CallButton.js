
import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CallButton() {
  return(
    <TouchableOpacity style={[styles.button, styles.buttonSolid]}>
          <Text style={styles.buttonText}>Звонок</Text>
    </TouchableOpacity>
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
  buttonSolid: {
    borderColor: '#FB7360',
    backgroundColor: '#FB7360'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FFFFFF'
  }
})