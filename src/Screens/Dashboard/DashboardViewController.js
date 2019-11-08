/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useState, useEffect} from 'react'
import DashboardView from './DashboardView'
import {useAuth} from '../../Context/AppProvider'

const DashboardViewController = props => {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')

  const dummyUser = {
    name: 'adrian lineweaver',
    admin: true,
  }

  const {navigation} = props
  const {logOut, userData} = useAuth()

  useEffect(() => {
    console.log(userData)
    // console.log(createAccount)
  }, [])

  const navigationHandler = route => {
    navigation.navigate(route)
  }

  const unAuthenticate = () => {
    const response = logOut()
    console.log(response)
    response.success ? navigation.navigate('Auth') : null
    console.log(response)
  }

  return (
    <DashboardView
      dummyUser={dummyUser}
      navigationHandler={navigationHandler}
      logOut={unAuthenticate}
      {...props}
    />
  )
}

export default DashboardViewController
