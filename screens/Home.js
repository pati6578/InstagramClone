import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'
import Post from '../components/Home/Post'
import { POSTS } from '../data/posts'
const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default Home
