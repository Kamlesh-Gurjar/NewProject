import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

const Stack = createNativeStackNavigator();

const Authnavigatore=()=>{
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default Authnavigatore;
