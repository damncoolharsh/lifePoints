import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import NotificationDialog from './NotificationDialog'
import Dialog from 'react-native-dialog'
import {
    PointsIndicator
} from '../components/index'

export default function Header({navigation}) {
    const [dialog, setDialog] = useState(false)

    return (
        <View style={styles.header}>
            <NotificationDialog visible={dialog} onDismiss={()=>{setDialog(false)}}/>
            <Image source={require('../assets/header.png')} style={StyleSheet.absoluteFill} />
            
            <View style={styles.userContainer}>
                <TouchableOpacity onPress={()=>{
                    navigation.push("Profile")
                }}>
                    <Image source={require('../assets/profile.png')} style={styles.profile}/>
                </TouchableOpacity>
                
                <Text style={{marginLeft: 15, fontSize: 14, color: 'white'}}>DavidW</Text>
            </View>

            <View style={styles.pointsContainer}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: 'white', fontSize: 10, marginBottom: 2}}>Points</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>40</Text>
                </View>
                <TouchableOpacity 
                    onPress={()=>{setDialog(!dialog)}} style={styles.padding}>
                    <PointsIndicator points={40}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    },
    userContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        flex: 1
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 18
    },
    pointsContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    padding: {
        marginHorizontal: 20
    }
})
