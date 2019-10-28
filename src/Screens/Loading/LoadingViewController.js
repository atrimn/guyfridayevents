import React, {useEffect} from 'react'
import LoadingView from './LoadingView'
import {useUser} from '../../Context/AppProvider'

const LoadingViewController = props => {
  const user = useUser()
  useEffect(() => {
    if (user) {
      props.navigation.navigate('Auth')
    }
    console.log(user)
  }, [])
  return <LoadingView />
}

export default LoadingViewController
