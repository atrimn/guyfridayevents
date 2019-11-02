// if User is logged in mount this navigator
import {createStackNavigator} from 'react-navigation-stack'
import DashboardViewController from '../Screens/Dashboard/DashboardViewController'

export const AppStack = createStackNavigator(
  {
    Dashboard: DashboardViewController,
  },
  {headerMode: 'none'},
)
