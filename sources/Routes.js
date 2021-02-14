import React, { useContext, useState } from 'react'
import {StatusBar, StyleSheet, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import TabsScreen from './screens/TabsScreen'
import NewsWindow from './screens/news/NewsWindow'
import {
    Profile,
    EditProfile
} from './screens/profile'
import {
    Header
} from './components/index'
import {AuthContext} from './Provider'

const Stack = createStackNavigator()

export default function Routes(){
    const {setUser} = useContext(AuthContext)
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#00001F" />
            <Stack.Navigator>
                <Stack.Screen 
                    name="Tabs" 
                    component={TabsScreen}
                    options={{
                        header: ({navigation})=>
                            <Header navigation={navigation}/>,
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
                        headerRight: ()=>(
                            <Text 
                                style={{ color: 'white', marginRight: 20}}
                                onPress={()=>{setUser(null)}}>LOG OUT</Text>
                        ),
                        ...profileHeaderStyle
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

const profileHeaderStyle = {
    title: 'PROFILE',
    headerTintColor: 'white',
    headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'normal'
    },
    headerStyle: {
        backgroundColor: '#121D23'
    }
}