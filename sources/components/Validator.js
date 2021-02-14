import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Validator(props) {
    return (
        props.valid
        ? <Image
            style={styles.size}
            source={require('../assets/valid.png')}
        />
        : <Image
            style={styles.size}
            source={require('../assets/invalid.png')}
        />
    )
}

const styles = StyleSheet.create({
    size: {
        width: 18,
        height: 18
    }
})
