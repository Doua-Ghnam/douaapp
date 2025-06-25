// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const index = () => {
//   return (
//     <View style={styles.container}>

//       <View style={styles.card} >
//         <View style={styles.top}>
//           <View style={styles.smallBox}>
//           </View>
//           <View>
//             <Text style={styles.ui}> Name: doua </Text>
//             <Text style={styles.ui}> Birthday: 11/8 </Text>
//           </View>
//         </View>

//         <Text style={styles.txt}> My first ui </Text>

//       </View>
//       <View style={styles.card} >
//         <View style={styles.top}>
//           <View style={styles.smallBox}>
//           </View>mko
//           <View>
//             <Text style={styles.ui}> Name: doua </Text>
//             <Text style={styles.ui}> Birthday: 11/8 </Text>
//           </View>
//         </View>

//         <Text style={styles.txt}> My first ui </Text>

//       </View>
//       <View style={styles.card} >
//         <View style={styles.top}>
//           <View style={styles.smallBox}>} 
//           </View>
//           <View>
//             <Text style={styles.ui}> Name: doua </Text>
//             <Text style={styles.ui}> Birthday: 11/8 </Text>
//           </View>
//         </View>

//         <Text style={styles.txt}> My first ui </Text>

//       </View>

//     </View>
//   )
// }
// export default index

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ff99d3',
//     // borderWidth80,
//     padding: 60,
//     borderColor: 'black',
//     color: 'black',

//   },
//   txt: {
//     color: '#ffffff',
//     backgroundColor: '#eb73bd',
//     textAlign: 'left',
//     width: 'auto',
//     flexDirection: "row-reverse",
//     position: 'relative',
//     justifyContent: 'space-between',
//     fontWeight: 'bold',
//     borderWidth: 1,
//     maxWidth: 'auto',
//     borderColor: '#ffffff',
//     fontSize: 30,
//     padding: 7,
//     borderRadius: 30,
//     margin: 10,
//   },
//   ui: {
//     backgroundColor: '#fa64b9',
//     fontSize: 20,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#f5077e',
//     marginBottom:,
//   },
//   smallBox: {
//     backgroundColor: '#cc297a',
//     height: 50,
//     width: 80,
//   }, 
//   top:{
//     flexDirection:'row'
//   }


// })

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useNavigation } from 'expo-router'
import Test from './test'

const index = () => {
  const navigation = useNavigation()
  setTimeout(() => {
    // router.replace("(tabs)")
    // navigation.replace('(tabs)')
  },2 * 1000 )
  return (
    <View style={styles.container}>
      {/* <Text style={styles.logo}>D&A</Text> */}
      <Test/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    backgroundColor: '#fce8f0',
  },

  logo: {
    fontSize: 0,
    fontWeight:'300',
    letterSpacing: -55,
    width: '50%'
  }
  })