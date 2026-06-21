import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

export default function Reports({ navigation }) {

    const loadGoods = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={gStyle.main}>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Рух товарів</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#578b13',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        color: '#632e04',
        fontSize: 16,
        fontFamily: 'mt-regular',
    }
});