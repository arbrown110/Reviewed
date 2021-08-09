import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home() {
    return (
        <View> style={styles.container}
            <Text style={styles.titletext}>Home Screen </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titletext: {
        fontfamily: 'nunito-bold',
        frontSize: 18,
    }
});
