import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({  navigaiton }) {
  

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of fresh Air', rating:5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta catch Them All (again)', rating:4, body: 'lorem ipsum', key: '2'},
        {title: 'Not So "Final" Fantasy', rating:3, body: 'lorem ipsum', key: '3'}
    ]);

    return (
        <View> style={globalStyles.container}
            <Text style={globalStyles.titletext}>Home Screen </Text>
            {/* <Button title 'go to review details' onPress={pressHandler} /> */}
        </View>
    )

}

