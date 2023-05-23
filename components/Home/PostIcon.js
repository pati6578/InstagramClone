import { View, Image, StyleSheet } from 'react-native'
export default PostFooter = () => (
  <View style = {{marginTop:20}}>
    <View style={styles.footerpost}>
      <Image
        source={{ uri:'https://cdn2.iconfinder.com/data/icons/instagram-17/32/3-like-512.png',}}
        style={styles.imagefooter}/>
      <Image
        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-media-ui-2/24/comments_comment_instagram_comments_no_comments_message_bubble_chat_speech_bubble_chat-512.png',}}
        style={styles.imagefooter}/>
      <Image source={{ uri:'https://cdn2.iconfinder.com/data/icons/instagram-17/32/11-share-512.png',}}
        style={styles.imagefooter} />
    </View>
  </View>
)
const styles = StyleSheet.create({
  footerIcon: {
    width: 40,
    height: 40,
  },
  footerpost: {
    flexDirection: 'row',
  },
  imagefooter: {
    width: 25,
    height: 25,
    marginTop: 16,
    marginLeft: 10,
  },
})
