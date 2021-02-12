import React from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native'
import {Typography} from '../constents/index'
import Validator from './Validator'

export default function FormField(props){
    return (
        <>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={props.onTextChange}
                    value={props.value}
                />
                <Validator valid={props.valid} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#A7A7A7',
        fontSize: 12,
        ...Typography.font('500')
    },
    inputField: {
        color: 'white',
        flex: 1,
        padding: 0,
        ...Typography.font('300')
    },
    inputContainer: {
        borderBottomColor: '#181835',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
})