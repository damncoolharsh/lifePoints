import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'
import Validator from '../../components/Validator'

export default function SignUp(){
    const [selectedGender, setSelectedGender] = useState(null)
    return (
        <View style={{backgroundColor: '#00001F', flex: 1, paddingHorizontal: 40}}>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={{color: 'white'}}>Profile Picture</Text>
                <View style={{height: 100, width: 100, borderWidth: 2, borderColor: '#24244B', borderRadius: 50, marginVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={require('../../assets/camera.png')} style={{width: 25, height: 19.5}}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-end', width: '100%',}}>
                <View style={{width: '90%'}}>
                    <Text style={{color: 'white'}}>Gender</Text>
                    <View style={{flexDirection: 'row', marginTop: 5, width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: 'blue'}}>

                        </View>

                        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#171732'}}>

                        </View>

                        <View style={{width: 50, height: 50, borderRadius: 25, backgroundColor: '#171732'}}>

                        </View>

                        <Validator valid={true} />
                    </View>
                </View>
            </View>
            
        </View>
    )
}