import React from 'react'
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native'
// import LoginViewController from './src/Screens/Login/loginViewController'
import AppNavigator from './src/Navigators'
import AppProviders from './src/Context/AppProvider'
import {Root} from 'native-base'

const App = () => {
  return (
    <Root>
      <AppProviders>
        <AppNavigator></AppNavigator>
      </AppProviders>
    </Root>
  )
}

export default App
