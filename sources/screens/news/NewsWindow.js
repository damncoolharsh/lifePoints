import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'

export default function NewsWindow({navigation, route}) {
    const [liked, setLike] = useState(false)
    const [disliked, setDislike] = useState(false)
    return (
        <View style={styles.container}>
            <View style={{width: '100%', height: '60%', position: 'relative'}}>
                <ImageBackground source={route.params.picUrl} style={{height: '100%', resizeMode: 'cover'}}/>
                <Image source={require('../../assets/backgroundGradient.png')}  style={styles.blurBackground}/>

                <View style={{color: 'white', position: 'absolute', top: '50%', padding: 20}}>
                    <Text style={{color: 'white', fontSize: 24, marginBottom: 15}}>Saint Mafds</Text>
                    <Text style={{color: 'white', fontSize: 14, marginBottom: 20}}>Medium Sunset Shoulder bag</Text>
                    <Text style={{color: '#DFDFDF', fontSize: 12, marginBottom: 20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit amet, consectetur</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity onPress={()=>{
                            setDislike(false)
                            setLike(!liked)
                        }}>
                            <Image 
                                style={{width: 40, height: 40, marginRight: 15}}
                                source={liked ? require('../../assets/thumbs-up-on.png') : require('../../assets/thumbs-up.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            setLike(false)
                            setDislike(!disliked)
                        }}>
                            <Image 
                                style={{width: 40, height: 40}}
                                source={disliked ? require('../../assets/thumbs-down-on.png'): require('../../assets/thumbs-down.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            <TouchableOpacity style={styles.goBack} onPress={()=>{navigation.pop()}}>
                <Image source={require('../../assets/arrow.png')} style={{width: 24, height: 16}}/>
            </TouchableOpacity>
            <View style={styles.footer}>
                <View style={styles.video}>
                    <ImageBackground source={require('../../assets/nike.png')} style={styles.videoBackground}/>
                    <Image source={require('../../assets/play.png')} style={styles.playButton}/>
                    <Image source={require('../../assets/video.png')} style={styles.videoImage}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        flex: 1
    },
    blurBackground: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0
    },
    goBack: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    playButton: {
        position: 'absolute', 
        alignSelf: 'center', 
        top: '38%', 
        width: 40, 
        height: 40
    },
    video: {
        width: '100%',
        height: '100%',
        backgroundColor: '#C7C7D3',
        borderRadius: 20,
        overflow: 'hidden'
    },
    videoImage: {
        position: 'absolute', 
        top: 14, right: 14, 
        width: 24, 
        height: 14
    },
    videoBackground: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    }

})
