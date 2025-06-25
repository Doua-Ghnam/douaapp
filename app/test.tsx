import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '@/assets/images/Images'

const Test = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={Images.dressQ()} style={styles.col} />
          <View>
              <Text style={styles.name} > name : dres</Text>
               <Text style={styles.name} > price : 150 </Text>
               <Text style={styles.name} > footage : M </Text>
          </View>
      </View>
        <View style={styles.menn}>
        <Image source={Images.menN()} style={styles.col} />
          <View>
              <Text style={styles.men} > name : Halepha</Text>
               <Text style={styles.men} > price : 70 </Text>
               <Text style={styles.men} > footage : L </Text>

          </View>
      </View>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  doua: {

    textAlign: 'left',


  },
  test: {
    // marginTop: 100
  },
  card: {
    borderRadius: 10,
    borderWidth: 4,
    width: '90%',
    flexDirection:'row'
  },
  col: {
    borderWidth: 4,
   width : 150,
   height: 120,

  },
  name : {
    textAlign:'left' ,
    color: 'red',

  },
   men:{
     textAlign:'left' ,
    color: 'red',

   },
   menn:{
     borderRadius: 10,
    borderWidth: 4,
    width: '90%',
    flexDirection:'row',
    margin: 80,
   }
})