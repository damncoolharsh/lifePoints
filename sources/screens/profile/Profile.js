import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import { PointsIndicator } from '../../components'

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#121D23" />
            <View style={styles.avatar}>
                <View style={[styles.circleOutside,{ width: 120, height: 120, borderRadius: 60, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}]}>
                    <Image source={require('../../assets/profile.png')} style={{borderRadius: 50, width: 100, height: 100}}/>
                </View>
                <View style={styles.name}>
                    <Text style={{color: 'white', marginRight: 16}}>David Welberg</Text>
                    <TouchableOpacity onPress={()=>{navigation.push('EditProfile')}}>
                        <Image source={require('../../assets/pencil.png')}  style={{width: 20, height: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.grid}>
                <View style={styles.gridItem}>
                    <PointsIndicator points={40} radius={40} color="#121D23"/>
                    <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>LEVEL</Text>
                </View>

                <View style={styles.gridItem}>
                    <View style={styles.circleOutside}>
                        <View style={styles.circleInside}>
                            <Text style={{color: 'white', fontSize: 16}}>50</Text>
                        </View>
                    </View>
                    <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>POINTS</Text>
                </View>
                <View style={styles.gridItem}>
                    <View style={styles.circleOutside}>
                        <View style={styles.circleInside}>
                            <Text style={{color: 'white', fontSize: 16}}>52</Text>
                        </View>
                    </View>
                    <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>MONTHLY</Text>
                </View>


                <View style={styles.gridItem}>
                    <View style={styles.circleOutside}>
                        <View style={styles.circleInside}>
                            <Text style={{color: 'white', fontSize: 16}}>520</Text>
                        </View>
                    </View>
                    <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>YEARLY</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1
    },
    avatar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    name: {
        marginTop: 8,
        flexDirection: 'row'
    },
    gridItem: {
        width: '50%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    circleOutside: {
        width: 80,
        height: 80,
        borderRadius: 45,
        borderColor: '#2F2F58',
        borderWidth: 2,
        padding: 5
    },
    text: {
        color: 'white'
    },
    circleInside: {
        flex: 1,
        backgroundColor: '#2F2F58',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
})