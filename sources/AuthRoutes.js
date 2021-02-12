import React from 'react'
import {StatusBar} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {
    ForgetPassword,
    LogIn,
    ResetPassword,
    SignUp,
    Verification
} from './screens/auth'

const AuthStack = createStackNavigator()

export default function AuthRoutes(){
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#00001F" />
            <AuthStack.Navigator>
                <AuthStack.Screen 
                    name="LogIn" 
                    component={LogIn}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen 
                    name="Verification"
                    component={Verification}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen 
                    name="ForgetPassword"
                    component={ForgetPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <AuthStack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false
                    }}
                />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}