import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Reference_Goods_List({ navigation }) {



    const [modalWindow, setmodalWindow] = useState(false);

    return (
        <View style={gStyle.main}>
            <Ionicons name="add-circle-outline" size={34} color="#6d3602" style={styles.iconAdd} onPress={() => setmodalWindow(true)} />
            <Text style={styles.text}>Список товарів</Text>
            <Modal visible={modalWindow}>
                <View style={gStyle.main}>
                    <MaterialCommunityIcons name="close-circle-outline" size={34} color="#8e0cf8" style={styles.iconClose} onPress={() => setmodalWindow(false)} />
                    <Text style={styles.title}>Форма додавання товарів</Text>
                </View>

            </Modal>




        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#504a46',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        color: '#edeee8',
        fontSize: 16,
        fontFamily: 'mt-regular',
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15
    },
    iconClose: {
        textAlign: 'right',
        marginTop: 5,
        marginRight: 5

    }
});