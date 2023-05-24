import { TextInput } from '@react-native-material/core'
import { View, StyleSheet } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

export default Searchbox = () => (
  <View style={styles.container}>
    <Ionic name="search" style={styles.ionicstyles} />
    <TextInput placeholder="Search" style={styles.textstyles}></TextInput>
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  ionicstyles: {
    fontSize: 15,
    position: 'absolute',
    zIndex: 1,
    left: 25,
    opacity: 0.5,
  },
  textstyles: {
    width: '95%',
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    fontSize: 15,
    padding: 4,
    paddingLeft: 40,
  },
})
