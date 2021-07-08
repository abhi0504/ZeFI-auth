import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Navbar from '../../../components/Navbar';
import loginStyles from './login.styles';

const LoginView = props => {
  return (
    <View style={{flex: 1}}>
      <Navbar />
      <View>
        <Image
          style={loginStyles.topAngle}
          source={require('../../../assets/loginImages/AngleTopLeft.png')}
        />
        <View>
          <View style={loginStyles.titleContainer}>
            <Text style={loginStyles.title}>Welcome to ZeFi!</Text>
            <Text style={loginStyles.labels}>Login to your account</Text>
          </View>
          <View style={loginStyles.mt20}>
            <Text style={[loginStyles.labels, loginStyles.ml_w1]}>Email</Text>
            <View>
              <TextInput
                style={loginStyles.input}
                onChangeText={value => props.onChangeText('email', value)}
                // value={text}
                placeholder="Email"
              />
            </View>
          </View>
          <View style={loginStyles.newUserArea}>
            <View style={loginStyles.bottomBar}>
            </View>
          </View>
          <View style={loginStyles.loginButton}>
            <TouchableOpacity onPress={props.login} style={loginStyles.submit}>
              <Text style={loginStyles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
        <Image
          style={loginStyles.bottomAngle}
          source={require('../../../assets/loginImages/AngleBottomRight.png')}
        />
    </View>
  );
};

export default LoginView;
