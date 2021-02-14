import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function ProfileAvatar() {
    return (
        <View style={[styles.circleOutside,{ width: 120, height: 120, borderRadius: 60, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}]}>
            <Image source={require('../assets/profile.png')} style={{borderRadius: 50, width: 100, height: 100}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    circleOutside: {
        width: 80,
        height: 80,
        borderRadius: 45,
        borderColor: '#2F2F58',
        borderWidth: 2,
        padding: 5
    },
})
