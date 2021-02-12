import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import {FormField, Spacing, StyledButton} from '../../components/index'
import { Typography } from '../../constents'

export default function LogIn({navigation}){
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const createNewAccount = ()=>{
        navigation.push('SignUp')
    }

    const loginUser = ()=>{

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo} />
            </View>
            <View style={styles.form}>
                <FormField 
                    title="EMAIL" 
                    valid={userInfo.email != ""}
                    onTextChange={(text)=>{
                        setUserInfo({
                            ...userInfo,
                            email: text
                        })
                    }}
                    value={userInfo.email}/>
                <Spacing value={20} />
                <FormField 
                    title="PASSWORD" 
                    valid={userInfo.password != ""}
                    onTextChange={(text)=>{
                        setUserInfo({
                            ...userInfo,
                            password: text
                        })
                    }}
                    value={userInfo.password}
                />
                <Spacing value={10} />
                <Text 
                    onPress={()=>{console.log("clicked")}}
                    style={styles.forgetPassword}>Forget Password?</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text}>
                    Don't have an account? 
                    <Text
                        style={styles.text} 
                        onPress={createNewAccount}> Create One</Text>
                </Text>
                <StyledButton onPress={loginUser}>Log In</StyledButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00001F',
        height: '100%',
        paddingHorizontal: 40,
        paddingVertical: 20
    },
    header: {
        width: '100%',
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    form: {
        
    },
    forgetPassword: {
        color: '#DFDFDF',
        fontSize: 12
    },
    footer: {
        marginTop: '30%',
        alignItems: 'center',
        flexDirection: 'column-reverse'
    },
    text: {
        color: 'white'
    }
})