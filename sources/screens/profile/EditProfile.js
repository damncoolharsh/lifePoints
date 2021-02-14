import React from 'react'
import { View, Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { FormField, UserForm } from '../../components'
import InputField from '../../components/InputField'
import ProfileAvatar from '../../components/ProfileAvatar'

export default function EditProfile({navigation}) {

    const goBack = ()=>{
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../assets/invalid.png')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
                <Text style={{color: 'white', marginLeft: 20, flex: 1}}>EDIT PROFILE</Text>
                <TouchableOpacity onPress={goBack}>
                    <Image source={require('../../assets/valid.png')} style={{width: 20, height: 20}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.profilePic}>
                <ProfileAvatar />
                <View style={styles.camera}>
                    <Image source={require('../../assets/camera.png')} style={{width: 20, height: 15}}/>
                </View>
            </View>

            <UserForm />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    container: {
        flex: 1,
        backgroundColor: '#121D23',
    },
    profilePic: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20
    },
    camera: {
        position: 'absolute',
        right: '28%',
        top: '40%'
    },
})
