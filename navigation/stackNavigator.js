import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ISStracker from "../screens/ISStracker";
import Meteors from "../screens/meteors";

const Stack = createStackNavigator()

export default class StackNavigator extends Component{
    render(){
        return(
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:true}}>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="ISS Tracker" component={ISStracker}/>
                <Stack.Screen name="Meteors" component={Meteors}/>
            </Stack.Navigator>
        )
    }
}