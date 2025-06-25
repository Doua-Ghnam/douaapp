import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import woman from './../app/woman';

const Govix = () => {
  return (
           <View>
                <View style={styles.gold}>
                <Ionicons name='search-outline' size={25} />
                 </View>
            </View>
    
  )
}

export default Govix

const styles = StyleSheet.create({
gold:{
flexDirection:'row',
},
})