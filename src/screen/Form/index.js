import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import InputField from './components/InputField';
import AreaHeader from './components/AreaHeader';
import BioField from './components/BioField';
import ButtonFooter from './components/ButtonFooter';

export default function Form({ navigation }) {
  const [photoLink, setPhotoLink] = useState();
  const [fio, setFio] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [bio, setBio] = useState();

  const onClickAdd = () => {
    const client = {name: fio, city: city};
    navigation.navigate('ClientsList', {newClient: client});
  };

  return (
    <SafeAreaView style={styles.container}>
      <AreaHeader onPress={() => navigation.goBack()} />
      <View style={styles.centralBox}>
        <InputField
          label="Фото"
          placeholder="Вставьте ссылку на фото"
          value={photoLink}
          onChangeText={setPhotoLink}
        />
        <InputField
          label="ФИО"
          placeholder="Введите фамилию и имя"
          value={fio}
          onChangeText={setFio}
        />
        <InputField
          label="Номер телефона"
          placeholder="+7 (000) 000 00 00"
          value={phone}
          onChangeText={setPhone}
        />
        <InputField
          label="Город"
          placeholder="Выберите город"
          value={city}
          onChangeText={setCity}
        />
        <BioField
          label="Био"
          placeholder={'Укажите хобби, интересы,\nобразование и стаж работы'}
          value={bio}
          onChangeText={setBio}
        />
      </View>
      <ButtonFooter onPress={() => onClickAdd()}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD'
  },
  centralBox: {
    marginTop: 24,
  },
});
