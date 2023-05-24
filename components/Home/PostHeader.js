import { View, Image, Text, StyleSheet } from 'react-native'
export default PostHeader = ({ albumId }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={{
          uri:
            'https://media.istockphoto.com/id/1300845620/pl/wektor/ikona-u%C5%BCytkownika-p%C5%82aska-izolowana-na-bia%C5%82ym-tle-symbol-u%C5%BCytkownika-ilustracja-wektorowa.jpg?s=612x612&w=is&k=20&c=DC2zqaurJ9V3_BxNVEQMFqgdOMmdrNSY0vtxbyBZgaI=',
        }}
        style={styles.image_postheader}
      />
    </View>
    <Text>{albumId}</Text>
    <Text style={styles.text_postheader}>...</Text>
  </View>
)
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 6,
    alignItems: 'center',
  },
  image_postheader: {
    width: 30,
    height: 35,
    marginLeft: 7,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: 'black',
  },
  text_postheader: {
    color: 'black',
    fontWeight: '800',
  },
})
