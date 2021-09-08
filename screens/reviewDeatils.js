import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RevieDetails({ navigation }) {

    // const pressHandler = () => {
    //     navigation.goBack();
    // }


    return (
        <View> style={globalStyles.container}
            <Text>{ navigation.getParam('title') }</Text>
            <Text>{ navigation.getParam('body') }</Text>
            <Text>{ navigation.getParam('rating') }</Text>
            {/* <Button title 'back to home screen' onPress={pressHandler} /> */}
        </View>
    )

}



// go back method pops screen off of stack