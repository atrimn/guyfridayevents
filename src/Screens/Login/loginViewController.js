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
  const [error, setError] = useState('')

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
      switch (error.errorCode) {
        case 'auth/wrong-password':
          setError('wrong password')
          break
        case 'auth/invalid-email':
          setError('invalid email address')
          break
        case 'auth/user-not-found':
          setError('no account exist with that email')
          break
      }
    }
  }

  const data = {
    username,
    password,
    setUsername,
    setPassword,
    navigationHandler,
    error,
    logIn: authenticate,
  }

  return <LoginView data={data} {...props} />
}

export default LoginViewController
