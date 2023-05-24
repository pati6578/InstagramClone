import { useEffect, useState } from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import { getPhotos } from '../data/getPhotos'
import PostImage from '../components/Home/PostImage'
import PostHeader from '../components/Home/PostHeader'
import PostIcon from '../components/Home/PostIcon'

export default function Home() {
  const [albums, setAlbums] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    async function fetchAlbums() {
      setLoading(true)
      getPhotos()
        .then((newAlbums) => {
          setAlbums(newAlbums)
        })
        .catch((e) => {
          setError(e)
        })
        .finally(() => {
          setLoading(false)
        })
    }

    fetchAlbums()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        isLoading={isLoading}
        data={albums}
        renderItem={({ item, index }) => {
          index.id
          return (
            <View>
              <PostHeader albumId={item.id} />
              <PostImage imageURI={item.url} title={item.title} />
              <PostIcon />
              <Text>88999 wyswietleń</Text>
              <Text>Comments</Text>
            </View>
          )
        }}
      />
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Something went wrong</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
  },
})
