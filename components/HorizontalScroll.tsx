import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Images from '../assets/images/Images';

const HorizontalScroll = (props) => {

  const { data} = props

  const renderData = () => {
    return data.map(product => {
      return <Image style={styles.vfv} source={product.img}/>
    })
  }

  return (
    <View>
      <ScrollView horizontal>
            <View style={styles.jok}>
              {renderData()}
            </View>
          </ScrollView>
    </View>
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({
    vfv: {
        borderWidth: 4,
        borderRadius: 8,
        height: 160,
        width: 290,
        margin: 7,
        borderColor: '#3a3b39',
      },
      jok: {
        flexDirection: 'row',
      },
})