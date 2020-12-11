import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeSreen';
import RecieverDetailScreen from '../screens/RecieverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
    Home : {
        screen : HomeScreen,
        navigationOptions : {
            headerShown : false
        }
    },

    RecieverDetails : {
        screen : RecieverDetailScreen,
        navigationOptions : {
            headerShown : false
        }
    }
},
    {
        initialRouteName : 'Home'
    }
)