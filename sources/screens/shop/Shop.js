import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Shop() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SHOP</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 14
    },
    title: {
        color: 'white',
        fontSize: 14
    }
})
