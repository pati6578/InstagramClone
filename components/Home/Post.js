import { Divider } from '@react-native-material/core'
import { View, Text, StyleSheet, Image } from 'react-native'

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider style={{ color: 'black', orientation: 'vertical' }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
    </View>
  )
}
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 6,
      alignItems: 'center',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: post.pictureProfile }} style={styles.profile} />
      <Text style={{ color: 'black', fontWeight: '700', marginLeft: 15 }}>
        {post.user}
      </Text>
    </View>
    <Text style={{ color: 'black', fontWeight: '800' }}>...</Text>
  </View>
)
const PostImage = ({ post }) => (
  <View
    style={{
      width: '100%',
      height: 400,
    }}
  >
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: '100%', resizeMode: 'cover' }}
    />
  </View>
)
const PostFooter = () => (
  <View>
    <View style={styles.footerpost}>
      <Image
        source={{
          uri:
            'https://cdn2.iconfinder.com/data/icons/instagram-17/32/3-like-512.png',
        }}
        style={styles.imagefooter}
      />
      <Image
        source={{
          uri:
            'https://cdn0.iconfinder.com/data/icons/social-media-ui-2/24/comments_comment_instagram_comments_no_comments_message_bubble_chat_speech_bubble_chat-512.png',
        }}
        style={styles.imagefooter}
      />
      <Image
        source={{
          uri:
            'https://cdn2.iconfinder.com/data/icons/instagram-17/32/11-share-512.png',
        }}
        style={styles.imagefooter}
      />
    </View>
  </View>
)
const Likes = ({ post }) => (
  <Text
    style={{ color: 'black', fontWeight: 800, marginTop: 15, marginLeft: 10 }}
  >
    {post.likes} likes
  </Text>
)

const Caption = ({ post }) => (
  <View style={{ marginTop: 4 }}>
    <Text style={{ marginLeft: 2 }}>
      <Text style={{ fontWeight: 900 }}>{post.user}</Text>
      <Text style>{post.caption}</Text>
    </Text>
  </View>
)

const styles = StyleSheet.create({
  profile: {
    width: 30,
    height: 35,
    marginLeft: 7,
    borderRadius: 60,
    borderWidth: 1.5,
    borderColor: 'black',
  },
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
export default Post
