import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { StyledButton } from '../../components'

export default function Product({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SHOP</Text>
            
            <View style={styles.product}>
                <View style={styles.productImage}>
                    <Image 
                        source={require('../../assets/shop/adidas-product.png')} 
                        style={{width: '100%', height: 210}} resizeMode='contain'/>
                </View>
                <View style={styles.content}>
                    <View style={styles.header} >
                        <Text style={{color: 'white', fontSize: 16}}>Adidas Lether</Text>
                        <View style={{alignItems: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>300</Text>
                            <Text style={{fontSize: 10, color: 'white'}}>POINTS</Text>
                        </View>
                    </View>

                    <Text style={styles.body}>Get 10% Off of a €100 purchase. Go to your nearest store to avail this discount. Valid from Jun - July, 2020</Text>
                    <StyledButton onPress={()=>{navigation.push("Payment")}}>BUY NOW</StyledButton>
                </View>
            </View>

            <TouchableOpacity style={styles.cencel} onPress={()=>{navigation.pop()}}>
                <Image source={require('../../assets/invalid.png')} style={{width: 14, height: 14}}/>
            </TouchableOpacity>
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
    },
    product: {
        position: 'relative',
        marginTop: 30,
        flex: 1,
        borderBottomRightRadius: 30
    },
    productImage: {
        borderTopLeftRadius: 30,
        overflow: 'hidden'
    },
    cencel: {
        width: 40,
        height: 40,
        position: 'absolute',
        backgroundColor: '#272751',
        top: 40,
        right: 14,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 30
    },
    body: {
        fontSize: 10,
        color: '#DFDFDF',
        marginBottom: 30
    },
    content: {
        elevation: 5,
        borderColor: 'white',
        paddingHorizontal: 20, 
        backgroundColor: '#171732'
    }
})
