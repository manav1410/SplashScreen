import React from 'react';
import {View, Text, StyleSheet,Component} from 'react-native';
import Navigator from './Screens/index.js';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react/cjs/react.production.min';
// import SplashScreen from 'react-native-splash-screen'

export default class App extends React.Component {

    componentDidMount() {
    // 	// do stuff while splash screen is shown
    //     // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    
    render(){
//      SplashScreen.hide();
      return(
        <Navigator></Navigator>);
    }
}



const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
})