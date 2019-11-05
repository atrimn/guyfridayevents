/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useEffect} from 'react'
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Title,
  Footer,
  FooterTab,
  Button,
  Text,
} from 'native-base'
import {ErrorLabel} from '../../Components'

const LoginView = props => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    navigationHandler,
    logIn,
    error,
  } = props.data

  useEffect(() => {
    console.log(props.data)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Title>Guy friday events</Title>
      </Header>
      <Content padder>
        <ErrorLabel error={error} />
        <Form>
          <Item floatingLabel last>
            <Label>Email address</Label>
            <Input value={username} onChangeText={setUsername} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </Item>
        </Form>
        <Button
          block
          style={{marginTop: 20, marginBottom: 10}}
          onPress={() => logIn(username, password)}>
          <Text>Sign in</Text>
        </Button>
        <Button
          block
          success
          small
          style={{marginBottom: 10}}
          onPress={() => navigationHandler('Register')}>
          <Text>Register</Text>
        </Button>
        <Button
          onPress={() => navigationHandler('ForgotPass')}
          small
          block
          transparent>
          <Text>Forgot password?</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default LoginView
