import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default Header = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.logo_header}
        source={require('../../assets/logoi.png')}
      />
    </TouchableOpacity>
    <View style={styles.icons}>
      <TouchableOpacity>
        <Image
          source={{
            uri:
              'https://cdn2.iconfinder.com/data/icons/instagram-17/32/3-like-512.png',
          }}
          style={styles.image_like}
        ></Image>
      </TouchableOpacity>
      <Image
        source={{
          uri:
            'https://cdn2.iconfinder.com/data/icons/instagram-17/32/11-share-512.png',
        }}
        style={styles.image_share}
      ></Image>
    </View>
  </View>
)

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
  image_like: {
    width: 25,
    height: 25,
    marginRight: 30,
    marginTop: 10,
  },
  image_share: {
    width: 25,
    height: 25,
    marginTop: 10,
  },

  logo_header: {
    marginTop: 20,
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
})
