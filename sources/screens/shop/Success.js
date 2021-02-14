import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Success() {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <Image source={require('../../assets/success.png')} style={{width: 50, height: 50}} />
                    <Text style={[styles.text, {marginVertical: 30}]}>Thank you for your purchase!</Text>
                </View>
                <View style={styles.order}>
                    <View>
                        <Text style={[styles.text, {fontSize: 16, marginBottom: 4}]}>Adidas 10% Off</Text>
                        <Text style={[styles.text, {fontSize: 12}]}>Jun - July, 2020</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.text, {fontSize: 14, fontWeight: 'bold'}]}>300</Text>
                        <Text style={[styles.text, {fontSize: 10}]}>POINTS</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        paddingHorizontal: 30,
        flex: 1
    },
    body: {
        backgroundColor: '#171732',
        paddingVertical: 30,
        flex: 1,
        paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    header: {
        alignItems: 'center',
        borderBottomColor: '#31316A',
        borderBottomWidth: 2
    },
    text: {
        color: 'white'
    },
    order: {
        paddingTop: 40,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})
