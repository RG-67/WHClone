import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import Chats from "../screen/Chats";
import Updates from "../screen/Updates";
import Communities from "../screen/Communities";
import Calls from "../screen/Calls";


const Tabs = createBottomTabNavigator();

const Tab = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {...styles.tabStyle}
            }}>
            <Tabs.Screen name="Chats" component={Chats} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tabContainer}>
                        <View 
                        style={{
                            height: focused ? 25 : null,
                            width: focused ? 50 : null,
                            borderRadius: focused ? 20 : null,
                            backgroundColor: focused ? "#293b2e" : null,
                            ...styles.imageCardStyyle
                        }}>
                        <Image 
                        source={require('../asset/bottom_chat.png')}
                        resizeMode="contain"
                        style={styles.imageStyle}
                        />
                        </View>
                        <Text style={styles.textStyle}>Chats</Text>
                    </View>
                ),
            }}/>
            <Tabs.Screen name="Updates" component={Updates} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tabContainer}>
                        <View style={{
                            height: focused ? 25 : null,
                            width: focused ? 50 : null,
                            borderRadius: focused ? 20 : null,
                            backgroundColor: focused ? "#293b2e" : null,
                            ...styles.imageCardStyyle
                        }}>
                        <Image 
                        source={require('../asset/bottom_updates.png')}
                        resizeMode="contain"
                        style={styles.imageStyle}
                        />
                        </View>
                        <Text style={styles.textStyle}>Updates</Text>
                    </View>
                ),
            }}/>
            <Tabs.Screen name="Communities" component={Communities} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tabContainer}>
                        <View style={{
                            height: focused ? 25 : null,
                            width: focused ? 50 : null,
                            borderRadius: focused ? 20 : null,
                            backgroundColor: focused ? "#293b2e" : null,
                            ...styles.imageCardStyyle
                        }}>
                        <Image 
                        source={require('../asset/bottom_communities.png')}
                        resizeMode="contain"
                        style={styles.imageStyle}
                        />
                        </View>
                        <Text style={styles.textStyle}>Communities</Text>
                    </View>
                ),
            }}/>
            <Tabs.Screen name="Calls" component={Calls} options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.tabContainer}>
                        <View style={{
                            height: focused ? 25 : null,
                            width: focused ? 50 : null,
                            borderRadius: focused ? 20 : null,
                            backgroundColor: focused ? "#293b2e" : null,
                            ...styles.imageCardStyyle
                        }}>
                        <Image 
                        source={require('../asset/bottom_calls.png')}
                        resizeMode="contain"
                        style={styles.imageStyle}
                        />
                        </View>
                        <Text style={styles.textStyle}>Calls</Text>
                    </View>
                ),
            }}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabStyle: {
        position: 'absolute',
        height: 74,
        backgroundColor: "#000000"
    },
    imageStyle: {
        height: 18,
        width: 18,
        tintColor: "#ffffff"
    },
    textStyle: {
        marginTop: 5,
        fontSize: 12,
        fontStyle: 'normal',
        color: "#ffffff",
        fontWeight: 'bold'
    },
    imageCardStyyle: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Tab;