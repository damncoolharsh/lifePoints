import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function UserForm({exclude}) {
    const [data, setData] = useState({
        firstName: "David",
        lastName: "Welberg",
        username: "DavidW",
        email: "davidwalb@gmail.com",
        phone: "+49-151-5557-847",
        address1: "Boxhagener Str. 13",
        address2: "Hamburg Stellingen, Hamburg(HH), 22525"
    })
    return (
        <>
            <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={styles.formField}>
                    <Text style={styles.formText}>FIRST NAME</Text>
                    <TextInput
                        style={styles.textInput}
                        value={data.firstName}
                        onChangeText={(text)=>{setData({...data, firstName: text})}}
                    />
                </View>
                <View style={styles.formField}>
                    <Text style={styles.formText}>LAST NAME</Text>
                    <TextInput
                        style={styles.textInput}
                        value={data.lastName}
                        onChangeText={(text)=>{setData({...data, lastName: text})}}
                    />
                </View>
            </View>
            {exclude
            ? null
            : <>
                <View style={[styles.formField, {width: '90%'}]}>
                    <Text style={styles.formText}>USERNAME</Text>
                    <TextInput
                        style={styles.textInput}
                        value={data.username}
                        onChangeText={(text)=>{setData({...data, username: text})}}
                    />
                </View>
                <View style={[styles.formField, {width: '90%'}]}>
                    <Text style={styles.formText}>EMAIL ID</Text>
                    <TextInput
                        style={styles.textInput}
                        value={data.email}
                        onChangeText={(text)=>{setData({...data, email: text})}}
                    />
                </View>
            </>}

            <View style={[styles.formField, {width: '90%'}]}>
                <Text style={styles.formText}>PHONE NUMBER</Text>
                <TextInput
                    style={styles.textInput}
                    value={data.phone}
                    onChangeText={(text)=>{setData({...data, phone: text})}}
                />
            </View>

            <View style={[styles.formField, {width: '90%'}]}>
                <Text style={styles.formText}>ADDRESS</Text>
                <TextInput
                    style={[styles.textInput, {borderBottomColor: '#2B2B67', borderBottomWidth: 2, paddingBottom: 8}]}
                    value={data.address1}
                    onChangeText={(text)=>{setData({...data, address1: text})}}
                />
                <TextInput
                    style={[styles.textInput, {paddingTop: 8}]}
                    value={data.address2}
                    onChangeText={(text)=>{setData({...data, address2: text})}}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    formField: {
        marginVertical: 18,
        borderBottomWidth: 2, 
        borderBottomColor: '#2B2B67', 
        width: '42%',
        marginHorizontal: 16
    },
    formText: {
        fontSize: 10,
        color: '#A7A7A7'
    },
    textInput: {
        padding: 0, 
        margin: 0, 
        color: 'white', 
        paddingBottom: 8
    }
})
