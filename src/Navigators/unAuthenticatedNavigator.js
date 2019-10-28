// if not authenticated Mount this navigator.
import {createStackNavigator} from 'react-navigation-stack'
import LoginViewController from '../Screens/Login/loginViewController'
import RegisterViewController from '../Screens/Login/RegisterViewController'
import ForgotPasswordViewController from '../Screens/Login/ForgotPasswordViewController'

export const AuthStack = createStackNavigator(
  {
    SignIn: LoginViewController,
    Register: RegisterViewController,
    ForgotPass: ForgotPasswordViewController,
  },
  {headerMode: 'none'},
)
