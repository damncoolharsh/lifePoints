import React from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native'

export default function Shop({navigation}) {

    const data = [
        {
            logo: require('../../assets/shop/starbucks-logo.png'),
            backgroundImage: require('../../assets/shop/starbucks.png'),
            backgroundColor: '#1A3C34',
            points: 200
        },
        {
            logo: require('../../assets/shop/adidas-logo.png'),
            backgroundImage: require('../../assets/shop/adidas.png'),
            backgroundColor: '#0F68D7',
            points: 300
        },
        {
            logo: require('../../assets/shop/netflix-logo.png'),
            backgroundImage: require('../../assets/shop/netflix.png'),
            backgroundColor: '#B8B8B8',
            points: 150
        },
        {
            logo: require('../../assets/shop/apple.png'),
            backgroundImage: require('../../assets/shop/iphone.png'),
            backgroundColor: '#1C1C1C',
            points: 500
        },
        {
            logo: require('../../assets/shop/spotify-logo.png'),
            backgroundImage: require('../../assets/shop/spotify.png'),
            backgroundColor: '#BE84FF',
            points: 100
        }
    ]

    const colA = data.slice(0, (data.length / 2)+ 1)
    const colB = data.slice((data.length/2) + 1, data.length)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SHOP</Text>
            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                <View style={[styles.col]}>
                    {colA.map((item, index)=>(
                        <TouchableOpacity 
                            key={index}
                            onPress={()=>{navigation.push("Product")}}  
                            style={[styles.card, {height: 160, backgroundColor: item.backgroundColor}]}>
                            <View style={[styles.header, {flexDirection: index%2===0 ? 'row' : 'row-reverse'}]}>
                                <Image source={item.logo} style={{height: 30, width: 25, alignItems: 'flex-start'}} resizeMode='contain'/>
                                <View style={styles.points}>
                                    <Text style={{color: 'white', fontSize: 9, fontWeight: 'bold'}}>{item.points}</Text>
                                    <Text style={{color: 'white', fontSize: 6}}>POINTS</Text>
                                </View>
                            </View>
                            <View style={{width: 100, height: 100, marginLeft: 20}}>
                                <Image source={item.backgroundImage} style={{ width: '100%', height: '100%'}} resizeMode='contain'/>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.col}>
                    {colB.map((item, index)=>(
                        <TouchableOpacity 
                            key={index}
                            onPress={()=>{navigation.push("Product")}} 
                            style={[styles.card, {height: 220, backgroundColor: item.backgroundColor, justifyContent: 'flex-start'}]}>
                            <View style={[styles.header, {flexDirection: index%2===0 ? 'row' : 'row-reverse'}]}>
                                <Image source={item.logo} style={{width: 50, height: 25}} resizeMode='contain'/>
                                <View style={styles.points}>
                                    <Text style={{color: 'white', fontSize: 11, fontWeight: 'bold'}}>{item.points}</Text>
                                    <Text style={{color: 'white', fontSize: 8}}>POINTS</Text>
                                </View>
                            </View>
                            <View style={{width: 100, height: 100, marginLeft: 20, marginTop: 30}} resizeMode='contain' >
                                <Image source={item.backgroundImage} style={{ width: '100%', height: '100%',}} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 14
    },
    title: {
        color: 'white',
        fontSize: 14,
        marginBottom: 22
    },
    col: {
        flex: 1,
        height: '100%',
    },
    card: {
        backgroundColor: 'white',
        marginRight: 10,
        marginBottom: 10,
        elevation: 7,
        borderColor: 'white',
        borderRadius: 12,
        justifyContent: 'space-between'
    },
    header: {
        justifyContent: 'space-between',
        height: 30,
        paddingHorizontal: 10,
        paddingTop: 10
    },
    points: {
        alignItems: 'center'
    }
})
