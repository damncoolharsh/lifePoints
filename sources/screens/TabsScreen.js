import React from 'react'
import { View, Text, Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import News from './news/News'
import Qrcode from './qrcode/Qrcode'
import Ranking from './ranking/Ranking'
import {
    Payment,
    Product,
    Shop,
    Success
} from './shop/index'

const Tab = createBottomTabNavigator()
const ShopStack = createStackNavigator()

const shopHeader = {
    headerStyle: {
        backgroundColor: '#121D23'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontSize: 16
    }
}

const ShopStackComponent = ()=>{
    return <ShopStack.Navigator>
        <ShopStack.Screen name="Shop" component={Shop} options={{headerShown: false}}/>
        <ShopStack.Screen name="Product" component={Product} options={{
            title: "SHOP",
            headerShown: false
        }}/>
        <ShopStack.Screen name="Payment" component={Payment} options={shopHeader}/>
        <ShopStack.Screen name="Success" component={Success} options={shopHeader} />
    </ShopStack.Navigator>
}
export default function TabsScreen() {
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                backgroundColor: '#121D23',
                height: '12%',
                elevation: 0,
                borderTopWidth: 0
            },
        }}>
            <Tab.Screen name="News" component={News} options={{
                tabBarIcon: (props)=>props.focused
                    ? <Image source={require('../assets/newsSelected.png')} style={{width: 22, height: 18.5}}/>
                    : <Image source={require('../assets/news.png')} style={{width: 22, height: 18.5}}/>}
            }/>
            <Tab.Screen name="Qrcode" component={Qrcode} options={{
                tabBarIcon: (props)=>
                    props.focused
                        ? <Image source={require('../assets/qrcodeSelected.png')} style={{width: 22, height: 20}}/>
                        : <Image source={require('../assets/qrcode.png')} style={{width: 22, height: 20}}/>
                }}/>
            <Tab.Screen name="Ranking" component={Ranking} options={{
                tabBarIcon: (props)=>
                props.focused
                        ? <Image source={require('../assets/trophySelected.png')} style={{width: 20, height: 20}}/>
                        : <Image source={require('../assets/trophy.png')} style={{width: 20, height: 20}}/>
            }}/>
            <Tab.Screen name="Shop" component={ShopStackComponent} options={{
                tabBarIcon: (props)=>
                props.focused
                        ? <Image source={require('../assets/shopSelected.png')} style={{width: 25, height: 25}}/>
                        : <Image source={require('../assets/shop.png')} style={{width: 25, height: 25}}/>
            }}/>
        </Tab.Navigator>
    )
}
