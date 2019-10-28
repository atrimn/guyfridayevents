import React from 'react'
import LoadingView from '../Screens/Loading/LoadingView'

const AuthContext = React.createContext()

const AuthProvider = props => {
  const [AppLoading, setAppLoading] = React.useState(true)
  const [user, setUser] = React.useState(null)

  //  Log out
  //  Log in
  // retrieve User

  const userData = {
    name: 'adrian',
    age: 12,
  }
  return <AuthContext.Provider value={{user, userData}} {...props} />
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
