import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import woman from './../app/woman';

const Category = () => {
    return (
        <View>
            <View style={styles.gohContainer}>

                <Text style={styles.gohm}>Women</Text>
                <View style={styles.gohm}>
                    <Text style={styles.goh}>Kids</Text>
                </View>
                <View style={styles.gohm}>
                    <Text style={styles.goh}>Men</Text>
                </View>
            </View>
        </View>

    )
}

export default Category

const styles = StyleSheet.create({

    gohContainer: {
        flexDirection: 'row',
        gap: '29%',
        borderColor: '#3a3b39',
        borderRadius: 50,
    
    },
    gohm: {
        borderWidth:3,
        borderColor: '#3a3b39',
        borderRadius: 40,
        padding:7,
        
    }
})