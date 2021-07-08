import React from 'react';
import {AsyncStorage} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import AppNavigator from './application';
import AuthNavigator from './authentication';

const Stack = createStackNavigator();

export default function MainNavigator(props) {

const isAuth = useSelector(state => !!state.auth.token);

const [value , setValue] = React.useState(null);

React.useEffect(async () => {
  const token = await AsyncStorage.getItem('user_token');
  setValue(token);
},[])

  return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isAuth || value!=null ? (
        <>
        <Stack.Screen name="Home" component={AppNavigator} />
        </>
      ) : (
        <>
        <Stack.Screen name="Auth" component={AuthNavigator} />
        </>
      )}
    </Stack.Navigator>
  </NavigationContainer>
  );
}
