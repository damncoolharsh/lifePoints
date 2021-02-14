import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import {
    Validator,
    FormField,
    StyledButton,
    Spacing
} from '../../components/index'

export default function SignUp({navigation}){
    const [selectedGender, setSelectedGender] = useState(null)
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: "",
        retype: ""
    })

    const loginWindow = ()=>{
        navigation.pop()
    }

    const createNewAccount = ()=>{
        if(userInfo.username != "" && userInfo.email != "" && userInfo.password != "" ){
            navigation.push("Verification", {email: userInfo.email})
        }
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.profilePicture}>
                <Text style={styles.text}>Profile Picture</Text>
                <View style={styles.uploadPhoto}>
                    <Image source={require('../../assets/camera.png')} style={{width: 25, height: 19.5}}/>
                </View>
            </View>

            <View style={styles.genderContainer}>
                <View>
                    <Text style={styles.title}>GENDER</Text>
                    <View style={styles.genderOptions}>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity
                                onPress={()=>{setSelectedGender(0)}}
                                style={{...styles.genderOption, backgroundColor: selectedGender === 0 ? '#116AD8' : '#171732'}}>
                                {selectedGender == 0
                                ? <Image style={styles.icon} source={require('../../assets/maleUserSelected.png')} />
                                : <Image style={styles.icon} source={require('../../assets/maleUser.png')}/>}
                            </TouchableOpacity>
                            <Text style={styles.text}>Male</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={()=>{setSelectedGender(1)}}
                                style={{...styles.genderOption, backgroundColor: selectedGender === 1 ? '#116AD8' : '#171732'}}>
                                {selectedGender == 1
                                ? <Image style={styles.icon} source={require('../../assets/femaleUserSelected.png')} />
                                : <Image style={styles.icon} source={require('../../assets/femaleUser.png')}/>}
                            </TouchableOpacity>
                            <Text style={styles.text}>Female</Text>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity 
                                onPress={()=>{setSelectedGender(2)}}
                                style={{...styles.genderOption, backgroundColor: selectedGender === 2 ? '#116AD8' : '#171732'}}>
                                {selectedGender == 2
                                ? <Image style={styles.icon} source={require('../../assets/maleUserSelected.png')} />
                                : <Image style={styles.icon} source={require('../../assets/maleUser.png')}/>}
                            </TouchableOpacity>
                            <Text style={styles.text}>Other</Text>
                        </View>

                        <Validator valid={selectedGender == null ? false : true} />
                    </View>
                </View>

            </View>
            
            <View style={{height: 260, justifyContent: 'space-between', marginVertical: 28}}>
                <FormField 
                    title="USERNAME"
                    onTextChange={(text)=>{setUserInfo({...userInfo, username: text})}}
                    value={userInfo.username}
                    valid={userInfo.username != ""}
                />
                
                <FormField 
                    title="EMAIL"
                    onTextChange={(text)=>{setUserInfo({...userInfo, email: text})}}
                    value={userInfo.email}
                    valid={userInfo.email != ""}
                />

                <FormField 
                    title="PASSWORD"
                    secure={true}
                    onTextChange={(text)=>{setUserInfo({...userInfo, password: text})}}
                    value={userInfo.password}
                    valid={userInfo.password != ""}
                />

                <FormField 
                    title="RETYPE PASSWORD"
                    secure={true}
                    onTextChange={(text)=>{setUserInfo({...userInfo, retype: text})}}
                    value={userInfo.retype}
                    valid={userInfo.retype != "" && userInfo.retype == userInfo.password}
                />
            </View>

            <StyledButton onPress={createNewAccount}>Create New Account</StyledButton>
            
            <View style={styles.footer} onPress={loginWindow}>
                <Text style={{color: 'white'}}>
                    Have an account?  Login
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00001F', 
        flex: 1, 
        paddingHorizontal: 40
    },
    profilePicture: {
        alignItems: 'center', 
        marginTop: 20
    },
    title: {
        color: '#A7A7A7',
        fontSize: 12
    },
    text: {
        color: '#A7A7A7',
        fontSize: 11
    },
    uploadPhoto: {
        height: 100, 
        width: 100, 
        borderWidth: 2, 
        borderColor: '#24244B', 
        borderRadius: 50, 
        marginVertical: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    genderContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        marginTop: 14
    },
    genderOptions: {
        flexDirection: 'row', 
        width: 250,
        marginTop: 12,
        justifyContent: 'space-between', 
        alignItems: 'center',
    },
    genderOption: {
        width: 40, 
        height: 40,
        borderRadius: 20, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 8
    },
    icon: {
        width: 20,
        height: 25,
    },
    footer: {
        // marginTop: 20,
        alignItems: 'center'
    },
})