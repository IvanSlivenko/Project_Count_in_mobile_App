import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

export default function Documents({ navigation }) {

    const loadGoods = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={gStyle.main}>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Придбання товарів</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#51138b',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        color: '#d6eb1e',
        fontSize: 16,
        fontFamily: 'mt-regular',
    }
});