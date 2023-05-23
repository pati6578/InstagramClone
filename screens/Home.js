import { View, FlatList, Text } from 'react-native'
import PostImage from '../components/Home/PostImage'
import data from '../data/search'
import PostHeader from '../components/Home/PostHeader'
import PostFooter from '../components/Home/PostFooter'
import PostIcon from '../components/Home/PostIcon'
export default function Home() {
  return (
    <View>
      <FlatList
        horizontal={false}
        data={data}
        renderItem={({ item, index }) => {
          index.id
          return (
            <View style={{ marginBottom: 30 }}>
              <PostHeader />
              <PostImage
                imageURI={item.url}
                style={{ width: 100, height: 150 }}
              />
             
              <PostIcon/>
              <Text>848 999 wyświetlen</Text>
              <PostFooter id={item.id} title={item.title} />
              <Text>Commnets: Lorem Ipsum </Text>
            </View>
          )
        }}
      />
    </View>
  )
}
