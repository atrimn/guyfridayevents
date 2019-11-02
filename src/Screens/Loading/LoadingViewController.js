import React, {useEffect} from 'react'
import LoadingView from './LoadingView'
import {useUser} from '../../Context/AppProvider'

const LoadingViewController = props => {
  const {user, loading} = useUser()
  console.log(useUser())
  useEffect(() => {
    if (!user && loading === false) {
      console.log(loading)
      props.navigation.navigate('Auth')
    }
    if (user && loading === false) {
      console.log(loading)
      props.navigation.navigate('App')
    }
    console.log('user: ' + user)
  }, [user, loading])
  return <LoadingView />
}

export default LoadingViewController
