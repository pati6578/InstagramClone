import { View, Text } from 'react-native'

export default PostFooter = ({ title, id }) => (
<View style={{flexDirection: 'row',justifyContent: 'space-between', margin: 6, alignItems: 'center', }} >
    <Text> {id}: {title} </Text>
</View>
)
