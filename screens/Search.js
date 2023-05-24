import { useEffect, useState } from 'react'
import { View, FlatList, Image, Text, StyleSheet } from 'react-native'
import Searchbox from '../components/Search/Searchbox'
import { getPhotos } from '../data/getPhotos'

const ImageComponent = ({ imageURI }) => (
  <View style={styles.container}>
    <Image source={{ uri: imageURI }} style={styles.imagesearch} />
  </View>
)

export default function Search() {
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
    <View>
      <Searchbox />
      <View>
        <FlatList
          horizontal={false}
          numColumns={6}
          data={albums}
          renderItem={({ item, index }) => {
            index.id
            return <ImageComponent imageURI={item.url} />
          }}
        />
      </View>

      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Something went wrong</Text>}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imagesearch: {
    width: 100,
    height: 150,
  },
})
