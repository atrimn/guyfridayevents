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

const App = () => {
  return (
    <AppProviders>
      <AppNavigator></AppNavigator>
    </AppProviders>
  )
}

export default App
