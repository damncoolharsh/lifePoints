import React from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native'
import {Typography} from '../constents/index'
import InputField from './InputField'
import Validator from './Validator'

export default function FormField(props){
    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.inputContainer}>
                <InputField {...props} />
                <Validator valid={props.valid} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#A7A7A7',
        fontSize: 12,
        ...Typography.font('500')
    },

    inputContainer: {
        borderBottomColor: '#2D2D76',
        borderBottomWidth: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
})
