import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "./SplashScreen";
import Chat from "./Chat";
import Tab from "../navigation/Tab";
import TabScreen from "./TabScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./Chats";
import Updates from "./Updates";
import Communities from "./Communities";
import Calls from "./Calls";


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
            <Tabs.Screen name="Chats" component={Chats}/>
            <Tabs.Screen name="Updates" component={Updates}/>
            <Tabs.Screen name="Communities" component={Communities}/>
            <Tabs.Screen name="Calls" component={Calls}/>
        </Tabs.Navigator>
  </NavigationContainer>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Tab" component={Tab} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App;