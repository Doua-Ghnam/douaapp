import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images'

const Dera = () => {
  return (
    <View>
      <Image source={Images.redDress()} style={styles.lil} />
      <Text style={styles.doua}>Dress</Text>
    </View>
  )
}

export default Dera

const styles = StyleSheet.create({
    lil: {
        borderWidth: 3,
        borderRadius: 80,
        height: 83,
        width: 83,
        marginBottom:0,
      },
  doua:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'500',
    // borderColor: 'black',
    flexDirection:'row',
    
    
  }
})