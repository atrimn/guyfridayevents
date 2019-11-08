import React, {useEffect} from 'react'
import firebase from 'react-native-firebase'
import LoadingView from '../Screens/Loading/LoadingView'
import {createUserEntry} from '../FirebaseUtils/firestoreUtils'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [AppLoading, setAppLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)

  // auth state listener
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        setAppLoading(false)
        console.log(user)
      } else {
        setUser(null)
        setAppLoading(false)
        console.log('no user')
      }
    })
  }, [])

  // create account
  async function createAccount(email, password) {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      // console.log(response)
      const {user} = response
      const createdUser = await createUserEntry({
        email: user.email,
        uid: user.uid,
      })
      return {success: 'account created succesfully!', user: createdUser}
    } catch (error) {
      // handle error codes.
      console.log(error)
    }
  }
  //  Log out
  function logOut() {
    try {
      firebase.auth().signOut()
      return {success: true, message: 'succesfully signed out'}
    } catch (error) {
      console.log(error)
      throw {
        error: true,
        message: 'Something went wrong!',
      }
    }
  }
  //  Log in
  async function logIn(email, password) {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      return {
        success: true,
        message: 'user authenticated',
      }
    } catch (error) {
      throw {
        error: true,
        errorCode: error.code,
      }
    }
  }
  // retrieve User

  const userData = {
    user: user,
    loading: AppLoading,
  }
  return (
    <AuthContext.Provider
      value={{
        userData,
        createAccount,
        logOut,
        logIn,
      }}
      {...props}
    />
  )
}

const useAuth = () => React.useContext(AuthContext)

const UserContext = React.createContext()

const UserProvider = props => {
  return <UserContext.Provider value={useAuth().userData} {...props} />
}

const useUser = () => React.useContext(UserContext)

const AppProviders = ({children}) => {
  return (
    <AuthProvider>
      <UserProvider>{children}</UserProvider>
    </AuthProvider>
  )
}

export {AuthProvider, useAuth, useUser}

export default AppProviders
