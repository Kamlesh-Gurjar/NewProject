// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Authnavigatore from '../authScreens/AuthNavigation/AuthNavigation';
 import CreatePost from '../screens/CreatePost/CreatePost';
import ScreenNavigation from '../screens/ScreensNavigatore/ScreenNavigation';

 

const Stack = createNativeStackNavigator();

function MainNavigatore() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="ScreenNavigation" component={ScreenNavigation} />
      <Stack.Screen name="CreatePost" component={CreatePost} />

        {/* <Stack.Screen name="Authnavigatore" component={Authnavigatore} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigatore;