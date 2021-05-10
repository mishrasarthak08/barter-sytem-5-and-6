import React from 'react';
import {Image} from 'react-native';
import { createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from './screens/homescreen'
import ExchangeScreen from './screens/exchangescreen'
import WelcomeScreen from './screens/signuploginscreen'
import {createDrawerNavigator} from 'react-navigation-drawer'
import CustomSideBarMenu from './components/customsidebarmenu'
import SettingScreen from './screens/settingscreen'

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator = createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen,
  navigationOptions:{
    tabBarIcon:<Image source = {require("./assets/home-icon.png")} style={{width:20 ,height:20}}/>,
    tabBarLabel:"Home"
  }
  },
  ExchangeScreen:{screen:ExchangeScreen,
    navigationOptions:{
      tabBarIcon:<Image source = {require("./assets/ads-icon.png")} style={{width:20 ,height:20}}/>,
      tabBarLabel:"Exchange"
    }
  }
},
)
const AppDrawerNavigator = createDrawerNavigator({
  Home:{screen:TabNavigator},
  Settings:{screen:SettingScreen}
},
{contentComponent:CustomSideBarMenu},
{initialRouteName:"Home"}
)

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
  AppDrawerNavigator:AppDrawerNavigator
})
const AppContainer = createAppContainer(SwitchNavigator);

