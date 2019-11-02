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

  const {navigation} = props
  const {logOut} = useAuth()

  useEffect(() => {
    // console.log(props)
    // console.log(createAccount)
  }, [])

  const headerBackHandler = () => {
    navigation.pop()
  }

  const unAuthenticate = () => {
    const response = logOut()
    console.log(response)
    response.success ? navigation.navigate('Auth') : null
    console.log(response)
  }

  return <DashboardView logOut={unAuthenticate} {...props} />
}

export default DashboardViewController
