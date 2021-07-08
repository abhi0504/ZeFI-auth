import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Navbar = (props) => {
  return (
    <View>
      <View style={styles.navbar}>
        <View style={styles.navbarIcon1}>
          <View style={{marginLeft: 5 , flexDirection: "row"}}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Montserrat-ExtraBold',
                fontSize: windowHeight * 0.04,
              }}>
              ZeFi
            </Text>
            {props.children}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: windowWidth,
    height: windowHeight * 0.09,
    backgroundColor: '#162239',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarIcon1: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Navbar;
