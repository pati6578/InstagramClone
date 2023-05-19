import { TextInput } from '@react-native-material/core'
import { View } from 'react-native'
import Ionic from 'react-native-vector-icons/Ionicons'

const Searchbox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <Ionic
        name="search"
        style={{
          fontSize: 15,
          position: 'absolute',
          zIndex: 1,
          left: 25,
          opacity: 0.5,
        }}
      />
      <TextInput
        placeholder="Search"
        style={{
          width: '95%',
          backgroundColor: '#EBEBEB',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      ></TextInput>
    </View>
  )
}

export default Searchbox
