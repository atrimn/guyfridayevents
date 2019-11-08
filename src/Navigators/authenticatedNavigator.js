// if User is logged in mount this navigator
import {createStackNavigator} from 'react-navigation-stack'
import DashboardViewController from '../Screens/Dashboard/DashboardViewController'
import EventsViewController from '../Screens/Events/EventsViewController'
import EventCreationViewController from '../Screens/EventCreation/eventCreationViewController'

export const AppStack = createStackNavigator(
  {
    Dashboard: DashboardViewController,
    events: EventsViewController,
    createEvent: EventCreationViewController,
  },
  {headerMode: 'none'},
)
