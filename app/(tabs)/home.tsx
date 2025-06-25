import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Images from '../../assets/images/Images'
// import Catagori from '../components/navigation/catagori'
import Category from '../../components/Category'

// import catagori from '../components/navigation/catagori'
import HorizontalScroll from '../../components/HorizontalScroll';
import { scroll1, scroll2 } from '../../constants/Data';
import Dera from '@/components/Dera'

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View >
            <Header />
            <Text></Text>
            {/* <Catagori/> */}
            <Category />
          </View>

        
          <HorizontalScroll data={scroll1}/>
          
         
          <View style={styles.sos} >
            {/* <Image source={Images.redDress()} style={styles.lil} /> */}
            <Dera/>
            <Image source={Images.blueDress()} style={styles.lil} />
            <Image source={Images.bebyDress()} style={styles.lil} />
            <Image source={Images.woomanDress()} style={styles.lil} />
          </View>
          <View style={styles.doua}>
            <Image source={Images.jaketWoman()} style={styles.lpl} />
            <Image source={Images.jaketBeby()} style={styles.lpl} />
            <Image source={Images.jaketBoby()} style={styles.lpl} />
            <Image source={Images.jaketMan()} style={styles.lpl} />
          </View>
          <View style={styles.fof}>
            <Image source={Images.bejamaS()} style={styles.dod} />
            <Image source={Images.bejamaD()} style={styles.dod} />
          </View>

          <View style={styles.gog}>
            <Image source={Images.tkM()} style={styles.hoh} />
            <Image source={Images.maN()} style={styles.hoh} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.hodI()} style={styles.abode} />
            <Image source={Images.moaQ()} style={styles.abode} />
          </View>
          <View style={styles.uyu}>
            <Image source={Images.waiF()} style={styles.abode} />
            <Image source={Images.girL()} style={styles.abode} />
          </View>
          <ScrollView horizontal>
            <View style={styles.jij}>
              <Image source={Images.boY()} style={styles.ftf} />
              <Image source={Images.baBy()} style={styles.ftf} />
              <Image source={Images.lplA()} style={styles.ftf} />
              <Image source={Images.pkoQ()} style={styles.ftf} />
              <Image source={Images.griN()} style={styles.ftf} />
              <Image source={Images.koL()} style={styles.ftf} />
              <Image source={Images.blacK()} style={styles.ftf} />
              <Image source={Images.waitPgama()} style={styles.ftf} />
            </View>
          </ScrollView>
          <View style={styles.ded}>
            <Image source={Images.pkoQ()} style={styles.xsx} />
            <Image source={Images.lplA()} style={styles.xsx} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.baBy()} style={styles.abode} />
            <Image source={Images.boY()} style={styles.abode} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.griN()} style={styles.abode} />
            <Image source={Images.koL()} style={styles.abode} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.blacK()} style={styles.abode} />
            <Image source={Images.waitPgama()} style={styles.abode} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.bgV()} style={styles.abode} />
            <Image source={Images.swiM()} style={styles.abode} />
          </View>
          <View style={styles.hih}>
            <Image source={Images.gygD()} style={styles.abode} />
            <Image source={Images.hoderA()} style={styles.abode} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
const styles = StyleSheet.create({
  lil: {
    borderWidth: 3,
    borderRadius: 80,
    height: 83,
    width: 83,
    margin: 7,
  },
  sos: {
    flexDirection: 'row',

  },
  lpl: {
    borderWidth: 3,
    borderRadius: 80,
    height: 83,
    width: 83,
    margin: 7,
  },
  doua: {
    flexDirection: 'row',
  },
  dod: {
    borderWidth: 3,
    height: 185,
    width: 185,
    margin: 5,
    borderColor: '#bf0404',
  },
  fof: {
    flexDirection: 'row',
  },
  hoh: {
    borderWidth: 3,
    height: 185,
    width: 185,
    margin: 5,
    borderColor: '#bf0404',
  },
  gog: {
    flexDirection: 'row',
  },
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
  abode: {
    borderWidth: 3,
    height: 185,
    width: 185,
    margin: 5,
    borderColor: 'black',
    borderRadius: 19,
  },
  hih: {
    flexDirection: 'row',
  },
  klj: {
    borderWidth: 3,
    height: 120,
    width: 10,
    margin: 5,
    borderColor: 'black',
    borderRadius: 19,
  },
  uyu: {
    flexDirection: 'row',
  },
  ftf: {
    borderWidth: 4,
    borderRadius: 8,
    height: 180,
    width: 310,
    margin: 7,
    borderColor: '#3a3b39',
  },
  jij: {
    flexDirection: 'row',
  },
  xsx: {
    borderWidth: 3,
    height: 185,
    width: 185,
    margin: 5,
    borderColor: 'black',
    borderRadius: 19,
  },
  ded: {
    flexDirection: 'row',
  },
})