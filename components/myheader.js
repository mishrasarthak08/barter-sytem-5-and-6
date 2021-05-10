import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

const MyHeader=(props)=>{
    return(
        <Header centerComponent={{text:props.title,style:{color:'yellow',fontSize:20,fontWeight:'bold'}}} 
        backgroundColor="black"/>
    )
}

export default MyHeader;