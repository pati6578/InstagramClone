import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigators/RootNavigator'
import Header from './components/Home/Header'

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <RootNavigator />
    </NavigationContainer>
  )
}
