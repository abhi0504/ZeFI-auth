import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Overview from '../../screen/overview';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Overview} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
