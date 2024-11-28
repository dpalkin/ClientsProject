import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Bio({ bio }) {
  return(
           <View style={styles.bioContainer}>
          <Text style={styles.headerBio}>Биография</Text>
          <Text style={styles.textBio}>{ bio }</Text>
        </View>
  )
}

const styles=StyleSheet.create({
    bioContainer: {
    marginTop: 72,
    marginHorizontal: 24,
  },
  headerBio: {
    fontWeight: 600,
    fontSize: 16
  },
  textBio: {
    marginTop: 12,
    color: '#A3A3A3',
    fontSize: 16,
    fontWeight: 400
  }
})


// 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.\n\n По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.'