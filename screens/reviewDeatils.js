import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function RevieDetails() {
    return (
        <View> style={globalStyles.container}
            <Text>Detail Screen </Text>
            <Button title '' onPress={pressHandler} />
        </View>
    )

}

