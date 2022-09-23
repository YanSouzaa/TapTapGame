import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home'
import Resultado from './pages/Resultado'
import Resultado2N from './pages/Resultado2N'
import Play110 from './pages/Play110'
import Play15 from './pages/Play15'
import Play1F from './pages/Play1F'
import Play2F from './pages/Play2F'
import Play2N from './pages/Play2N'
import Modo1 from './pages/Modo1'
import Modo2 from './pages/Modo2'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false,gestureDirection:'horizontal-inverted'}} />
      <Stack.Screen name="Resultado" component={Resultado} options={{headerShown:false}} />
      <Stack.Screen name="Resultado2N" component={Resultado2N} options={{headerShown:false}} />
      <Stack.Screen name="Play110" component={Play110} options={{headerShown:false}} />
      <Stack.Screen name="Play15" component={Play15} options={{headerShown:false}} />
      <Stack.Screen name="Play1F" component={Play1F} options={{headerShown:false}} />
      <Stack.Screen name="Play2F" component={Play2F} options={{headerShown:false}} />
      <Stack.Screen name="Play2N" component={Play2N} options={{headerShown:false}} />
      <Stack.Screen name="Modo1" component={Modo1} options={{headerShown:false,gestureDirection:'vertical'}} />
      <Stack.Screen name="Modo2" component={Modo2} options={{headerShown:false}} />

    </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;