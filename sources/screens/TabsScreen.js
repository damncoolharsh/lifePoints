import React from 'react'
import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import News from './news/News'
import Qrcode from './qrcode/Qrcode'
import Ranking from './rankings/Rankings'
import Shop from './shop/Shop'

const Tab = createBottomTabNavigator()
export default function TabsScreen() {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: '#121D23',
                height: '14%',
                elevation: 0,
                borderTopWidth: 0
            },
        }}>
            <Tab.Screen name="News" component={News} options={{
                tabBarIcon: (props)=>props.focused
                    ? <Image source={require('../assets/newsSelected.png')} style={{width: 29, height: 22}}/>
                    : <Image source={require('../assets/news.png')} style={{width: 29, height: 22}}/>}
            }/>
            <Tab.Screen name="Qrcode" component={Qrcode} options={{
                tabBarIcon: (props)=>
                    props.focused
                        ? <Image source={require('../assets/qrcodeSelected.png')} style={{width: 30, height: 27}}/>
                        : <Image source={require('../assets/qrcode.png')} style={{width: 30, height: 27}}/>
                }}/>
            <Tab.Screen name="Ranking" component={Ranking} options={{
                tabBarIcon: (props)=>
                props.focused
                        ? <Image source={require('../assets/trophySelected.png')} style={{width: 25, height: 25}}/>
                        : <Image source={require('../assets/trophy.png')} style={{width: 25, height: 25}}/>
            }}/>
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon: (props)=>
                props.focused
                        ? <Image source={require('../assets/shopSelected.png')} style={{width: 40, height: 40}}/>
                        : <Image source={require('../assets/shop.png')} style={{width: 40, height: 40}}/>
            }}/>
        </Tab.Navigator>
    )
}
