/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useState, useEffect} from 'react'
import ForgotPasswordView from './ForgotPasswordView'

const ForgotPasswordViewController = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {navigation} = props

  useEffect(() => {
    console.log(props)
  }, [])

  const headerBackHandler = () => {
    navigation.pop()
  }

  const data = {
    username,
    password,
    setUsername,
    setPassword,
    headerBackHandler,
  }

  return <ForgotPasswordView data={data} {...props} />
}

export default ForgotPasswordViewController
