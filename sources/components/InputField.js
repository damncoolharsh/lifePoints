import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Typography } from '../constents'

export default function InputField(props) {
    return (
        <TextInput 
            style={styles.inputField}
            onChangeText={props.onTextChange}
            value={props.value}
            secureTextEntry={props.secure}
        />
    )
}

const styles = StyleSheet.create({
    inputField: {
        color: 'white',
        flex: 1,
        letterSpacing: 2,
        padding: 0,
        paddingBottom: 8,
        ...Typography.font('300')
    },
})
