import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReduxThunk from 'redux-thunk';

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
    <MainNavigator />
  </Provider>
  );
};

export default App;
