import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Touchable} from 'react-native';
import ImgSlider from './ImgSlider';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <ImgSlider></ImgSlider>
            <Text style={{fontSize:30,margin:20,fontFamily:'Salsa-Regular'}}>hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})