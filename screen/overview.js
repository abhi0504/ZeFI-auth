import React from 'react';
import {View,Text , TouchableOpacity , AsyncStorage} from 'react-native';

const Overview = () => {
  return (
    <View>
        <TouchableOpacity onPress={() => {
          AsyncStorage.clear();
        }} style={{height: 100 , width: 100 , backgroundColor: "orange"}}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Overview;
