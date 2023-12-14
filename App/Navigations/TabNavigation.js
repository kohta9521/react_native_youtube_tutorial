import { View, Text } from 'react-native'
import React from 'react'

// screen import
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';

// bottmtabnavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Fav" component={Fav} />
        </Tab.Navigator>
    )
}

export default TabNavigation