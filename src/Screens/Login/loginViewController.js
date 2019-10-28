/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useState, useEffect} from 'react'
import LoginView from './LoginView'

const LoginViewController = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {navigation} = props

  useEffect(() => {
    console.log(props)
  }, [])

  const navigationHandler = route => {
    navigation.navigate(route)
  }

  const data = {
    username,
    password,
    setUsername,
    setPassword,
    navigationHandler,
  }

  return <LoginView data={data} {...props} />
}

export default LoginViewController
