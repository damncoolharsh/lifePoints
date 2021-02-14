import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Qrcode() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DIGITAL MEMBER CARD</Text>
            <View style={styles.qrcode}>
                <View style={styles.box}>
                    <Image source={require('../../assets/qr-code-large.png')} style={{width: '100%', height: '100%'}} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20
    },
    title: {
        color: 'white',
        fontSize: 14
    },
    qrcode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        width: 240,
        height: 240,
        borderWidth: 5,
        borderColor: '#A8A8A8',
        borderRadius: 7
    }
})
