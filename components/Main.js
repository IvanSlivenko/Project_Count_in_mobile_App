import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

    const loadReferences = () => {
        navigation.navigate('References');
    };

    const loadDocuments = () => {
        navigation.navigate('Documents');
    };

    const loadReports = () => {
        navigation.navigate('Reports');
    };

    const loadAdminSegments = () => {
        navigation.navigate('AdminSegments');
    };

    return (
        <View style={gStyle.main}>

            <TouchableOpacity style={styles.button} onPress={loadReferences}>
                <Text style={styles.text}>Довідники</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadDocuments}>
                <Text style={styles.text}>Документи</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadReports}>
                <Text style={styles.text}>Звіти</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={loadAdminSegments}>
                <Text style={styles.text}>Адміністратору</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8B4513',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 8,
        alignItems: 'center',
    },
    text: {
        color: '#d6eb1e',
        fontSize: 16,
        fontWeight: '600',
    }
});