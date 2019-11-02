import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {AuthStack} from './unAuthenticatedNavigator'
import {AppStack} from './authenticatedNavigator'
import LoadingViewController from '../Screens/Loading/LoadingViewController'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: {
        screen: LoadingViewController,
      },
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
)
