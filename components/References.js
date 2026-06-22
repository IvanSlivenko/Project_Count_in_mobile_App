import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { gStyle } from '../styles/style';

export default function References({ navigation }) {

    const loadGoods = () => {
        navigation.navigate('Main');
    };

    const loadReference_Goods_List = () => {
        navigation.navigate('Reference_Goods_List');
    };



    return (
        <View style={gStyle.main}>

            <TouchableOpacity style={styles.button} onPress={loadReference_Goods_List}>
                <Text style={styles.text}>Товари</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Склади</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Контрагенти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Каси</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadGoods}>
                <Text style={styles.text}>Рахунки</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e3610',
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