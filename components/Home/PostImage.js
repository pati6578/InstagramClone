import { View, Image, Text } from 'react-native'
export default ImagePostComponent = ({ imageURI, title }) => (
  <View style={{ width: '100%', height: 400 }}>
    <Image
      source={{ uri: imageURI }}
      style={{ height: '100%', resizeMode: 'cover' }}
    />
    <Text>{title}</Text>
  </View>
)
