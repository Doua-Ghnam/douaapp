import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

const cart = () => {
  return (
    <View>
      <Text>cart</Text>
      <FontAwesome5 name="fire" size={24} color="black" />
    </View>
  )
}

export default cart

const styles = StyleSheet.create({})