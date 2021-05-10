import React, { Component} from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/homescreen'
import ReceiverDetails from '../screens/receiverdetails'
import {createStackNavigator} from 'react-navigation-stack'


export const AppStackNavigator=createStackNavigator({
    BarterList:{
        screen:HomeScreen
    },
    ReceiverDetails:{
        screen:ReceiverDetails
    }
},
{
    initialRouteName:'BarterList'
})