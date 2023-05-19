import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/logoi.png')} />
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/instagram-17/32/3-like-512.png',
            }}
            style={{ width: 25, height: 25, marginRight: 30, marginTop: 10 }}
          ></Image>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/instagram-17/32/11-share-512.png',
          }}
          style={{ width: 25, height: 25, marginTop: 10 }}
        ></Image>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  icons: {
    flexDirection: 'row',
  },

  logo: {
    marginTop: 20,
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
})
export default Header
