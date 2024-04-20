import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home/Home';
import CreatePost from '../CreatePost/CreatePost';
 
const Stake = createNativeStackNavigator();
const ScreenNavigation = () => {
  return (
    <Stake.Navigator screenOptions={{headerShown: false}}>
      <Stake.Screen name="Home" component={Home} />
      {/* <Stake.Screen name="CreatePost" component={CreatePost} /> */}
    </Stake.Navigator>
  );
};

export default ScreenNavigation;
