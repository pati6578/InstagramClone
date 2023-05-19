import { View, FlatList,Image } from 'react-native'
import Searchbox from '../components/Search/Searchbox'

import data from '../data/search'
// import data from "./data";

const ImageComponent = ({ imageURI, title, isGreen }) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }}
  >
    <Image
      source={{
        uri: imageURI,
      }}
      style={{ width: 100, height: 150 }}
    />
  </View>
)

export default function Search() {
  return (
    <View>
      <Searchbox />
      <FlatList
        horizontal={false}
        numColumns={6}
        data={data}
        renderItem={({ item, index }) => {
          index.id
          return <ImageComponent imageURI={item.url} />
        }}
      />
    </View>
  )
}
