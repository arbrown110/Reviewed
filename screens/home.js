import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {
    return (
        <View> style={globalStyles.container}
            <Text style={globalStyles.titletext}>Home Screen </Text>
            <Button title 'go to review details' onPress={} />
        </View>
    )

}

