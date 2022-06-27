import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeScreen from "../screens/Home/HomeScreen";
import ScheduleScreen from "../screens/Schedule/ScheduleScreen";
import ChatScreen from "../screens/Chat/ChatScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    header: () => null,
                    tabBarIcon: ({ tintColor, focused }) => (
                        focused ?
                            <TouchableOpacity style={styles.circleStyle}>
                                <Entypo name="home" size={24} color={tintColor} />
                            </TouchableOpacity>
                            : <Entypo name="home" size={24} color={tintColor} />
                    ),
                },
            },
            Scedule: {
                screen: ScheduleScreen,
                navigationOptions: {
                    tabBarLabel: 'Schedule',
                    tabBarIcon: ({ tintColor, focused }) => (
                        focused ?
                            <TouchableOpacity style={styles.circleStyle}>
                                <FontAwesome5 name="calendar-alt" size={24} color={tintColor} />
                            </TouchableOpacity>
                            : <FontAwesome5 name="calendar-alt" size={24} color={tintColor} />
                    ),
                },
            },
            Chat: {
                screen: ChatScreen,
                navigationOptions: {
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ tintColor, focused }) => (
                        focused ?
                            <TouchableOpacity style={styles.circleStyle}>
                                <MaterialIcons name="chat" size={24} color={tintColor} />
                            </TouchableOpacity>
                            : <MaterialIcons name="chat" size={24} color={tintColor} />
                    ),
                }
            },
            Profile: {
                screen: ProfileScreen,
                navigationOptions: {
                    header: () => null,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ tintColor, focused }) => (
                        focused ?
                            <TouchableOpacity style={styles.circleStyle}>
                                <Ionicons name="person" size={24} color={tintColor} />
                            </TouchableOpacity>
                            : <Ionicons name="person" size={24} color={tintColor} />
                    ),
                }
            },
        },
        {
            initialRouteName: "Home",
            barStyle: { backgroundColor: 'white' },
            tabBarOptions: {
                showLabel: false,
                activeTintColor: '#6979F8',
                style: { height: 70.0, elevation: 0.0, borderTopWidth: 0 },
            },
        },
    )
);

export default TabNavigator;

const styles = StyleSheet.create({
    circleStyle: {
        height: 50.0,
        width: 50.0,
        backgroundColor: '#F5F5F5',
        borderRadius: 25.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});