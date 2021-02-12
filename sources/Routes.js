import React from 'react'
import {View, Image, StatusBar, StyleSheet, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import TabsScreen from './screens/TabsScreen'
import NewsWindow from './screens/news/NewsWindow'
import ProgressCircle from 'react-native-progress-circle'
import {
    Profile,
    EditProfile
} from './screens/profile'

const Stack = createStackNavigator()

export default function Routes(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#00001F" />
            <Stack.Navigator>
                <Stack.Screen 
                    name="Tabs" 
                    component={TabsScreen}
                    options={{
                        header: ()=>
                            <View style={styles.header}>
                                <Image source={require('./assets/header.png')} style={StyleSheet.absoluteFill} />
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('./assets/profile.png')} style={styles.profile}/>
                                    <Text style={{marginLeft: 15, fontSize: 14, color: 'white'}}>DavidW</Text>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{color: 'white', fontSize: 10, marginBottom: 5}}>Points</Text>
                                        <Text style={{fontSize: 22, color: 'white'}}>40</Text>
                                    </View>
                                    <View style={{marginHorizontal: 15}}>
                                        <ProgressCircle
                                            radius={30}
                                            color="#36C7FF"
                                            percent={40}
                                            borderWidth={4}
                                            bgColor="#423A8C"
                                            shadowColor="#181835"
                                        >
                                            <Image source={require('./assets/image.png')} style={{width: 30, height: 30}}/>
                                        </ProgressCircle>
                                    </View>
                                </View>
                            </View>,
                    }}
                />
                <Stack.Screen
                    name="NewsWindow"
                    component={NewsWindow}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="EditProfile"
                    component={EditProfile}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        justifyContent: 'space-between'
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginLeft: 18
    }
})