import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ClientItem from './components/ClientItem.js';
import HeaderArea from './components/HeaderArea.js';
import ButtonFooter from './components/ButtonFooter.js';


  const defaultClients = [
    {
      id: '1',
      name: 'Иван Игнатов',
      photoLink: require('../../assets/IvanIgnatov.png'),
      city: 'Калининград',
    },
    {
      id: '2',
      name: 'Олег Иванов',
      photoLink: require('../../assets/OlegIvanov.png'),
      city: 'Москва',
    },
    {
      id: '3',
      name: 'Сергей Чернышев',
      photoLink: require('../../assets/SergeyChernishev.png'),
      city: 'Казань',
      bio: 'Я увлекаюсь рыбалкой, сноубордом и люблю играть со своей трёхлетней дочкой.\n\n По образованию маркетолог, много лет работал на крупные компании. Теперь решил погрузиться в мир IT.'
    },
  ]


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem("@clients", jsonValue)
  } catch (e) {
    //saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@clients')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    //error reading value
  }
}


export default function ClientsList({ navigation, route }) {

  const [clients, setClients] = useState(defaultClients)  //массив клиентов на основном экране, способный обновляться при добавлении новго клиента
  const [filterClients, setFiltredClients] = useState(clients)
  const [filter, setFilter] = useState('') //search

  const loadClients = async () => {
    const storedClients = await getData();
    setClients(storedClients ?? []);
  }

  useEffect(() => {
   loadClients();
  }, [])

//useEffect по добавлению нового клиента на экран
  useEffect(() => {
    const newClient = route.params?.newClient;
      if (newClient !== undefined) {
        const updatedClients = [... clients, newClient]; 
        setClients(updatedClients);
        storeData(updatedClients);
        /*navigation/setParams({
          newClient: undefined
        });*/
      } 
  }, [route.params?.newClient,]);  // clients, navigation
  

// useEffect по поиску в строке "Поиск" //toLowerCase делаем, чтобы поиске не учитывал регистр введенных букв
 useEffect(() => {
   const clientsAfterFilter = clients.filter((client) => client.city.toLowerCase().includes(filter.toLowerCase()));
   setFiltredClients(clientsAfterFilter);
 }, [filter, clients])
  

  const onClientClick = (client) => {
    navigation.navigate('Profile', { client });
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderArea placeholder="Поиск" value={filter} onChangeText={setFilter} />
      <FlatList
        data={filterClients}
        renderItem={({ item }) => (
          <ClientItem client={item} onPress={() => onClientClick(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
      <ButtonFooter onPress={() => navigation.navigate('Form')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFDFD',
    flex: 1,
  },
});
