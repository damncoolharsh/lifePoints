import React from 'react'
import { Image } from 'react-native'

export default function Validator(props) {
    return (
        props.valid
        ? <Image
            source={require('../assets/valid.png')}
        />
        : <Image
            source={require('../assets/invalid.png')}
        />
    )
}
