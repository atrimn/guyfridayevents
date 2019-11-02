/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useState, useEffect} from 'react'
import LoginView from './LoginView'
import {useAuth} from '../../Context/AppProvider'

const LoginViewController = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {logIn} = useAuth()
  const {navigation} = props

  useEffect(() => {
    console.log(props)
  }, [])

  const navigationHandler = route => {
    navigation.navigate(route)
  }

  const authenticate = async (username, password) => {
    try {
      const response = await logIn(username, password)
      console.log(response)
      response.success ? navigation.navigate('App') : null
    } catch (error) {
      console.log(error)
    }
  }

  const data = {
    username,
    password,
    setUsername,
    setPassword,
    navigationHandler,
    logIn: authenticate,
  }

  return <LoginView data={data} {...props} />
}

export default LoginViewController
