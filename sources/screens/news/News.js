import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Animated, Image, ImageBackground } from 'react-native'
import {Spacing} from '../../components/index'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const ITEM_WIDTH = width * 0.8

export default function News({navigation}) {
    const scrollX = useRef(new Animated.Value(0)).current
    const data = [
        {},
        {
            title: "Nike Joyride",
            news: "Lorem ipsum dolor sit amet, consectetur",
            picUrl: require('../../assets/news/nike.png')
        },
        {
            title: "Nike Joyride",
            news: "Lorem ipsum dolor sit amet, consectetur",
            picUrl: require('../../assets/news/nike2.png')
        },
        {
            title: "boys",
            news: "Medium Sunset shoulder bag",
            picUrl: require('../../assets/news/nike3.png')
        },
        {
            title: "Saint Laurent",
            news: "Medium Sunset shoulder bag",
            picUrl: require('../../assets/news/woman.png')
        },
        {
            title: "Lorem ipsum",
            news: "Lorem ipsum dolor sit amet, consectetur",
            picUrl: require('../../assets/news/women3.png')
        },
        {}
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.title}>NEWS</Text>
            <Animated.FlatList 
                data={data}
                horizontal
                style={styles.carousel}
                snapToInterval={ITEM_WIDTH}
                decelerationRate='fast'
                bounces={false}
                onScroll={new Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index})=>{
                    if(Object.keys(item).length === 0){
                        return <Spacing value={18} />
                    } else{
                        const inputRange = [(index - 2)*ITEM_WIDTH, (index -1) * ITEM_WIDTH, (index) * ITEM_WIDTH]
                        const scale = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.9, 1, 0.9]
                        })

                        return (
                            <TouchableOpacity
                                onPress={()=>{navigation.push("NewsWindow", {picUrl: item.picUrl})}} >
                                <Animated.View key={index} style={{...styles.card, transform: [{scale}]}}>
                                        <ImageBackground 
                                            source={item.picUrl}
                                            style={{flex: 1, resizeMode: 'cover'}}
                                        />
                                            
                                        <View style={styles.newsHeader}>
                                            <Text style={styles.newsTitle}>{item.title}</Text>
                                            <Text style={styles.text}>{item.news}</Text>
                                        </View>
                                </Animated.View>
                            </TouchableOpacity>
                        )
                    }
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingTop: 20
    },
    title: {
        color: 'white',
        paddingLeft: 30,
        fontSize: 14
    },
    carousel: {
        height: 300,
        paddingTop: 20
    },
    card: {
        elevation: 6,
        borderColor: 'white',
        borderWidth: 0,
        width: ITEM_WIDTH,
        height: height * 0.58,
        borderRadius: 12,
        overflow: 'hidden'
    },
    newsHeader: {
        backgroundColor: '#171732',
        height: 70,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    newsTitle: {
        fontSize: 14,
        color: 'white',
        marginBottom: 4
    },
    text: {
        color: 'white',
        fontSize: 12
    }
})
