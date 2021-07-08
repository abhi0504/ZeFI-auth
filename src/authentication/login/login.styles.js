import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const loginStyles = StyleSheet.create({
  topAngle: {
    height: windowHeight * 0.15,
    width: windowHeight * 0.15,
  },
  bottomAngleContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  bottomAngle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    height: windowHeight * 0.15,
    width: windowHeight * 0.15,
  },
  titleContainer: {
    marginLeft: windowWidth * 0.1,
    marginTop: windowHeight * 0.04,
  },
  title: {
    fontSize: windowWidth * 0.075,
    fontFamily: 'Montserrat-Bold',
  },
  labels: {
    fontSize: windowWidth * 0.035,
    fontFamily: 'Montserrat-Bold',
    color: '#7c7c7c',
  },
  mt2: {marginTop: 2},
  mt20: {marginTop: 20},
  ml_w1: {marginLeft: windowWidth * 0.1},
  ml5: {marginLeft: 5},
  input: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.8,
    marginLeft: windowWidth * 0.1,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7c7c7c',
    fontFamily: 'Montserrat-Light',
    padding: 10,
  },
  submit: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.06,
    backgroundColor: '#0ae38c',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    fontSize: windowHeight * 0.025,
  },
  loginButton: {alignItems: 'center' , marginTop:25},
});

export default loginStyles;
