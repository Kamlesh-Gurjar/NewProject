// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authnavigatore from '../authScreens/AuthNavigation/AuthNavigation';

 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authnavigatore" component={Authnavigatore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;