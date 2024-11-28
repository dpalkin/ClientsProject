import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ClientsList from './src/screen/ClientsList';
import Profile from './src/screen/Profile';
import Form from './src/screen/Form';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ClientsList" component={ClientsList} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
