import React from 'react';
import {View,Text , TouchableOpacity , AsyncStorage} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from '../components/Navbar';

const Overview = () => {
  return (
    <View>
        <Navbar>
          <MaterialCommunityIcons name="clock-time-four-outline" color={"white"} size={24} />
        </ Navbar>
    </View>
  );
};

export default Overview;
