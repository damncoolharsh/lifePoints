import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import Dialog from 'react-native-dialog'

export default function NotificationDialog({visible, onDismiss}) {
    const data = [
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            points: 100
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            points: 500
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            points: 1000
        },
        {
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            points: 5000
        },
    ]
    return (
        <Dialog.Container 
            visible={visible} 
            onBackdropPress={onDismiss} 
            onBackButtonPress={onDismiss}
            contentStyle={styles.dialog}
        >
            <TouchableOpacity style={styles.cencel} onPress={onDismiss}>
                <Image source={require('../assets/invalid.png')} style={{width: 14, height: 14}}/>
            </TouchableOpacity>
            <ScrollView>
                {data.map((item, index)=>(
                <View key={index} style={[styles.item, {borderBottomWidth: index == data.length - 1 ? 0 : 2}]}>
                    <View style={styles.header}>
                        <Image source={require('../assets/image.png')} style={{width: 36, height: 36}}/>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 18, color: 'white'}}>
                                {item.points >= 1000 ? `${(item.points / 1000)}K` : item.points}
                            </Text>
                            <Text style={{color: 'white', fontSize: 10}}>POINTS</Text>
                        </View>
                    </View>
                    <Text style={styles.body}>{item.content}</Text>
                </View>
                ))}
                
            </ScrollView>
        </Dialog.Container>
    )
}

const styles = StyleSheet.create({
    dialog: {
        margin: 0,
        padding: 0,
        height: '90%',
        maxWidth: '80%',
        borderRadius: 20,
        overflow: 'visible',
        paddingHorizontal: 20,
        backgroundColor: '#171732'
    },
    item: {
        borderBottomColor: '#31316A',
        marginBottom: 12
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    body: {
        color: 'white',
        fontSize: 12,
        paddingVertical: 20
    },
    cencel: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#272751',
        top: -20,
        right: -15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
})
