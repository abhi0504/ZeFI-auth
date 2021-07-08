import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Magic } from '@magic-sdk/react-native';

const m = new Magic('pk_live_89170ADB732D6340');

import MainNavigator from './src';
import authReducer from './store/reducers/auth';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => { 
  return (
  <Provider store={store} >
    <m.Relayer />
    <MainNavigator />
  </Provider>
  );
};

export default App;
