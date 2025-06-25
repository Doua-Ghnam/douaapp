import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
// import Images from './../assets/images/Images';

const Header = () => {
  return (
    <View style={styles.container}>
      
        <View style={ styles.flaw}>
       
          <Text style={styles.logo}>D&A</Text>
          <View style={styles.ex}>
            <Ionicons name='search-outline' size={25} />
            <TextInput style={styles.ei} placeholder='search' placeholderTextColor={'gray'}/>

          </View>
        
         
          <Text style={styles.sol}></Text>
        </View>
    </View>

  )
}

export default Header
const styles = StyleSheet.create({
  logo: {
    fontSize:34,
    fontWeight: '300',
    letterSpacing: -10,
    color: 'black',
    width:'15%',
    
  },
  flaw:{
  flexDirection:'row',
  alignItems:'center',
  },
  ei:{
   flexDirection:'row',
   borderColor:'black',
   width: 260,
   fontSize:19,
   height:30,

  },
  sol:{
    flexDirection:'row-reverse',
    alignItems:'baseline',
    letterSpacing:10,
    borderColor:'red'
  },
  ex :{
    flexDirection:'row',
    borderWidth:3,
    borderRadius:14,
    width: 290,
    margin:'auto'
  },
})