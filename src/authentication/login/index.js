import React , {useState , useEffect} from 'react';
import {Alert, BackHandler , AsyncStorage} from 'react-native';
import { connect } from 'react-redux';

import {login} from '../../../store/actions/auth';
import LoginScreen from './login.view';
import { loginUser , checkUser } from '../../../service/magic'
// import Auth0 from 'react-native-auth0';
// const auth0 = new Auth0({ domain: 'dev-vei8ysas.us.auth0.com', clientId: 'R1gMlOtjvHRYeQRkqqYW8i5XfTE27UqC' });

const Login = (props) => {

const [email , setEmail ] = useState("")
const [loading , setLoading] = useState(false)
 
useEffect(() => {
  console.log("USE EFFECT");
  console.log(email);
} , [])

const loginHandler = async () => {
  try {
    console.log("login");
    setLoading(true)
    const res = await loginUser(email);
    props.login(res)
    console.log(res);
    setLoading(false)
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}
  
    return (
      <LoginScreen 
      login={loginHandler} 
      setEmail={setEmail}
      loading={loading}
      />
    );
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(Login)