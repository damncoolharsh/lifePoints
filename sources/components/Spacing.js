import React from 'react'
import {
    View
} from 'react-native'

export default function Spacing({value}){
    return (
        <View style={{padding: value}} />
    )
}