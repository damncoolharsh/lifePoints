import React, { useRef, useState } from 'react'
import {StackActions} from '@react-navigation/native'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    ScrollView
} from 'react-native'
import { StyledButton } from '../../components'
import { Typography } from '../../constents'

export default function Verification({navigation, route}){

    const pin1Ref = useRef("")
    const pin2Ref = useRef("")
    const pin3Ref = useRef("")
    const pin4Ref = useRef("")

    const [pins, setPins] = useState({
        pin1: "",
        pin2: "",
        pin3: "",
        pin4: ""
    })

    const goBack = ()=>{
        navigation.pop()
    }

    const loginWindow = ()=>{
        navigation.dispatch(StackActions.pop(2))
        StackActions.pop
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo} />
            </View>
            <View style={styles.headingContainer}>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../assets/arrow.png')} style={styles.back}/>
                </TouchableOpacity>
                <Text style={{fontSize: 26, color: 'white'}}>Verification</Text>
            </View>
            <View >
                <Text style={styles.infoText}>We have sent you a verification code to your email ID {route.params.email}</Text>
            </View>

            <View style={styles.pinsContainer}>
                <TextInput 
                    style={styles.pin}
                    maxLength={1}
                    ref={pin1Ref}
                    value={pins.pin1}
                    onChangeText={(text)=>{
                        setPins({
                            ...pins,
                            pin1: text
                        })
                        if(text != ""){
                            pin2Ref.current.focus()
                        }
                    }}
                    keyboardType="numeric"
                />

                <TextInput 
                    style={styles.pin}
                    maxLength={1}
                    ref={pin2Ref}
                    value={pins.pin2}
                    onChangeText={(text)=>{
                        setPins({
                            ...pins,
                            pin2: text
                        })
                        if(text != ""){
                            pin3Ref.current.focus()
                        } 
                    }}
                    keyboardType="numeric"
                />

                <TextInput 
                    style={styles.pin}
                    maxLength={1}
                    ref={pin3Ref}
                    value={pins.pin3}
                    onChangeText={(text)=>{
                        setPins({
                            ...pins,
                            pin3: text
                        })
                        if(text != ""){
                            pin4Ref.current.focus()
                        } 
                    }}
                    keyboardType="numeric"
                />
                <TextInput 
                    style={styles.pin}
                    maxLength={1}
                    ref={pin4Ref}
                    value={pins.pin4}
                    onChangeText={(text)=>{
                        setPins({
                            ...pins,
                            pin4: text
                        })
                    }}
                    keyboardType="numeric"
                />
            </View>

            <View style={{alignItems: 'center', marginBottom: '20%'}}>
                <Text style={styles.text}>Didn't get code? Tap to resend</Text>
            </View>

            <StyledButton onPress={loginWindow}>VERIFY</StyledButton>

            <View style={{alignItems: 'center', marginBottom: '20%'}} >
                <Text style={{color: 'white'}} onPress={loginWindow}>
                    Have an account?  Login
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00001F',
        height: '100%',
        paddingHorizontal: 40,
        paddingVertical: 0
    },
    header: {
        width: '100%',
        paddingVertical: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 22
    },
    logo: {
        width: '45%',
        height: 126,
    },
    back: {
        width: 24,
        height: 21,
        marginRight: 20
    },
    infoText: {
        color: '#DFDFDF',
        fontSize: 11
    },
    pinsContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: '25%',
        marginBottom: 40,
        justifyContent: 'space-around'
    },
    pin: {
        borderBottomWidth: 2,
        borderBottomColor: '#2D2D76',
        fontSize: 26,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        color: 'white',
        ...Typography.font('500')
    }
})