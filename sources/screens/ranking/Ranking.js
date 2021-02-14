import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, Image, FlatList } from 'react-native'

export default function Rankings() {
    const [switchValue, setSwitchValue] = useState()
    const data = [
        {
            name: "Henry Ramirez",
            points: '17880',
            picUrl: require('../../assets/Ranking/male.png')
        },
        {
            name: 'Kara Cloutier',
            points: '15860',
            picUrl: require('../../assets/Ranking/female2.png')
        },
        {
            name: 'Nathan Holt',
            points: '13540',
            picUrl: require('../../assets/Ranking/male2.png')
        },
        {
            name: 'Jade Arnett',
            points: '8750',
            picUrl: require('../../assets/Ranking/female.png')
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>RANKING</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: 'white', paddingRight: 4}}>Monthly</Text>
                    <Switch 
                        trackColor={{false: '#29296A', true: '#29296A'}}
                        thumbColor='#36C7FF'
                        style={{
                            transform: [{scaleX: 1.1}, {scaleY: 1.1}],
                        }}
                        value={switchValue} 
                        onValueChange={(value)=>{setSwitchValue(value)}}/>
                    <Text style={{color: 'white', paddingLeft: 6}}>Yearly</Text>
                </View>
            </View>
            
            <FlatList 
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item)=>(
                    <View key={item.index} style={[styles.rankItem, {borderBottomWidth: item.index === data.length - 1 ? 0 : 2}]}>
                        <View style={styles.userContainer}>
                            <Text style={{color: 'white', marginRight: 30}}>{item.index + 1}</Text>
                            <View style={{borderRadius: 100, width: 40, height: 40, overflow: 'hidden', marginRight: 20}}>
                                <Image source={item.item.picUrl} style={{width: '100%', height: '100%'}}/>
                            </View>
                            <View style={{}}>
                                <Text style={{color: 'white', fontSize: 12, flex: 1}}>{item.item.name}</Text>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={require('../../assets/star.png')} style={{width: 12, height: 12}} />
                                    <Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>{item.item.points}</Text>
                                </View>
                            </View>
                        </View>
                        <Image source={require('../../assets/image.png')} style={{width: 30, height: 30}} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20
    },
    title: {
        color: 'white',
        fontSize: 14
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50
    },
    rankItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        marginBottom: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#28285B'
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
