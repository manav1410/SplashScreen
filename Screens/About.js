import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function About(){
    return(
        <View style={styles.container}>
            <Text style={{fontSize:30}}>About us</Text>
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