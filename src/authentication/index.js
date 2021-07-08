import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './login';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
