import { View, Image } from 'react-native'
export default ImagePostComponent = ({ imageURI }) => (
  <View style={{ width: '100%', height: 400 }}>
    <Image
      source={{ uri: imageURI }}
      style={{ height: '100%', resizeMode: 'cover' }}
    />
  </View>
)
