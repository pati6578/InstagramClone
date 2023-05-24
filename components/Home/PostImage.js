import { View, Image, Text, StyleSheet } from 'react-native'
export default ImagePostComponent = ({ imageURI, title }) => (
  <View style={styles.container}>
    <Image source={{ uri: imageURI }} style={styles.imagestyle} />
    <Text>{title}</Text>
  </View>
)
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
  },
  imagestyle: {
    height: '100%',
    resizeMode: 'cover',
  },
})
