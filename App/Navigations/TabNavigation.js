import { View, Text } from 'react-native'
import React from 'react'

// icons import
import { Ionicons } from '@expo/vector-icons';

// screen import
import Home from '../Screens/Home';
import Fav from '../Screens/Fav';

// bottmtabnavigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Screens/Search';
import Profile from '../Screens/Profile';

const TabNavigation = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: "home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={Search}
                options={{
                    tabBarLabel: "search",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Fav" component={Fav}
                options={{
                    tabBarLabel: "fav",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: "profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation