import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Typography} from '../constents/index'

export default function StyledButton({children, onPress}) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#5098F2',
        width: '100%',
        alignItems: 'center',
        padding: 15,
        borderRadius: 20,
        marginBottom: 40
    },
    buttonText: {
        color: 'white',
        ...Typography.font('500')
    },
})
