import React, { useRef, useState } from 'react'
import {StackActions} from '@react-navigation/native'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native'
import { FormField, StyledButton } from '../../components'

export default function ForgetPassword({navigation, route}){
    const [email, setEmail] = useState("")

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
                <Text style={{fontSize: 26, color: 'white'}}>Forget Password</Text>
            </View>
            <View >
                <Text style={styles.infoText}>Give us your registered email address and we'll send you link to reset your password</Text>
            </View>
            <View style={styles.emailContainer}>
                <FormField
                    title="EMAIL"
                    onTextChange={(text)=>{
                        setEmail(text)
                    }}
                    value={email}
                    valid={email != ""}
                />
            </View>
            <StyledButton onPress={()=>{
                if(email != ""){
                    navigation.push("ResetPassword")
                }
            }}>SEND</StyledButton>

            <View style={{alignItems: 'center', marginBottom: '20%'}}>
            <Text style={{color: 'white'}}>
                    Have an account? 
                    <Text
                        style={{color: 'white'}} 
                        onPress={loginWindow}> Login</Text>
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
    emailContainer: {
        marginVertical: '40%',
    },
    pin: {
        borderBottomWidth: 2,
        borderBottomColor: '#181835',
        fontSize: 26,
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        color: 'white',
    }
})