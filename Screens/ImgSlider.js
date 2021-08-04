import React from 'react';
import { View,StyleSheet, Image, Text, Component, ScrollView,Dimensions } from 'react-native';
// import styles from './ImgSlider.styles.js';
import Slideshow from 'react-native-image-slider-show';

const {width} = Dimensions.get("window");
const height = width * 0.6;


export default class ImgSlider extends React.Component {
state={
    active:0,
}

    change = (event) =>{
        const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active:slide});
        }
    }
    render() {
        const Imgs = [
            require('../Imgs/1.jpg'),
            require('../Imgs/2.jpg'),
            require('../Imgs/3.jpg'),
            require('../Imgs/4.jpg')
        ];
        return (
            <View style={{width,height,borderColor:'black',borderWidth:2}}>
                <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll={this.change}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll}>
                    {
                        Imgs.map((Img, index) => (
                            <Image
                                key={index}
                                source={Img}
                                style={styles.ImgBox}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.pagingTab}>
                    {
                        Imgs.map((i,k)=>(
                            <Text key={k} style={k===this.state.active?styles.pageActiveDot:styles.pageDot}>⬤</Text>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        height:180,
        width:320,
        borderWidth:1,
        borderColor:'black',
    },
    scroll:{
        width,
        height,
    },
    ImgBox:{
        width,
        height,
        resizeMode:'cover',
    },
    pageDot:{
        color:'#888',
        margin:3,
    },
    pageActiveDot:{
        color:'#fff',
        margin:3,
    },
    pagingTab:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    }
});
