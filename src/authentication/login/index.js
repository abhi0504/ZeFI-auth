import React, {Component} from 'react';
import {Alert, BackHandler , AsyncStorage} from 'react-native';
import { connect } from 'react-redux';

import * as authActions from '../../../store/actions/auth';
import LoginScreen from './login.view';



class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isConnected: false,
      netSubscribe: null,
      backHandler: null,
      email: '',
      password: '',
      show: false,
    };
  }
  

  componentDidMount() {
    
  }

  connectOnMount() {
    console.log("HELLO");
  }

  componentWillUnmount = () => {
    console.log("HELLO");
  };

  handleConnectivityChange = state => {
    this.setState({
      isConnected: state.isConnected,
    });
  };

  remember = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  onChangeText = (key, value) => {
    const state_value = {};
    state_value[key] = value;
    this.setState(state_value);
  };

  login = async () => {
    console.log(JSON.stringify(this.state));
    console.log("HELLO");
  };

  render() {
    return (
      <LoginScreen
        navigation={this.props}
        remember={this.remember}
        isChecked={this.state.isChecked}
        onChangeText={this.onChangeText}
        login={this.login}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (token) => dispatch(authActions.login(token))
})

export default connect(null, mapDispatchToProps)(Login)