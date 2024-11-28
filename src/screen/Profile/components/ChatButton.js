
import React from 'react';
import { Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ChatButton() {
  return(
     <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonText}>Чат</Text>
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
   buttonOutline: {
    borderColor: '#FB7360',
   },
     buttonText: {
    fontSize: 16,
    fontWeight: 600,
    color: '#FB7360',
  },
  })