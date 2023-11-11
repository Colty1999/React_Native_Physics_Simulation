import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Menu from './features/menu/Menu';
import Game from './features/game/Game';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style='auto' hidden />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Menu"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name='Menu'
            component={Menu}
          // initialParams={{ userId: user.id }}
          />
          <Stack.Screen
            name='Game'
            component={Game}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView >
  );
}
