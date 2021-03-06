import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import {
    UserForm,
    StyledButton
} from '../../components/index'
import { Typography } from '../../constents'

export default function Payment({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.header}>
                    <View>
                        <Text style={[styles.text, {fontSize: 16, marginBottom: 4}]}>Adidas 10% Off</Text>
                        <Text style={[styles.text, {fontSize: 12}]}>Jun - July, 2020</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={[styles.text, {fontSize: 14, fontWeight: 'bold'}]}>300</Text>
                        <Text style={[styles.text, {fontSize: 10}]}>POINTS</Text>
                    </View>
                </View>
                <ScrollView style={{paddingHorizontal: 20}}>
                    <UserForm exclude={true}/>
                    <StyledButton onPress={()=>{navigation.push("Success")}}>BUY NOW</StyledButton>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#121D23',
        flex: 1,
        paddingHorizontal: 30,
    },
    body: {
        backgroundColor: '#171732',
        flex: 1,
        borderBottomRightRadius: 30
        // borderColor: 'white'
    },
    header: {
        height: 80,
        backgroundColor: '#534AA2',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 30,
        padding: 24
    },
    text: {
        color: 'white',
        ...Typography.font('500')
    }
})
