/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useState, useEffect} from 'react'
import RegisterView from './RegisterView'
import {useAuth} from '../../Context/AppProvider'

const RegisterViewController = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {navigation} = props
  const {createAccount} = useAuth()

  useEffect(() => {
    // console.log(props)
    console.log('username: ' + username)
    console.log('password: ' + password)
  }, [username, password])

  // const registerSuccessHandler = () => {
  //   try {
  //     const response = await createAccount()
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }

  const headerBackHandler = () => {
    navigation.pop()
  }

  return (
    <RegisterView
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      headerBackHandler={headerBackHandler}
      createAccount={createAccount}
      {...props}
    />
  )
}

export default RegisterViewController
