import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const TextResize = (props) => {
  return (
      <Text style={props.styles}> 
          {props.line.length > props.value ? props.line.slice(0 , props.value-1) + "..."  : props.line}
      </Text>
  );
};

export default TextResize;
