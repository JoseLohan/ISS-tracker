import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

export default class Meteors extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Meteors Screen
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
    }
})