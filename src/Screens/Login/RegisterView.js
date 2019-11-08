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
  Body,
  Footer,
  FooterTab,
  Button,
  Text,
  Right,
  Left,
  Icon,
} from 'native-base'

const RegisterView = props => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    headerBackHandler,
    createAccount,
  } = props

  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={headerBackHandler}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Register</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel last>
            <Label>Email address</Label>
            <Input value={username} onChangeText={setUsername} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </Item>
        </Form>
        <Button
          block
          small
          style={{marginVertical: 20}}
          onPress={async () => {
            const response = await createAccount(username, password)
            if (response.success) {
              console.log(response.success)
              props.navigation.navigate('App')
            }
          }}>
          <Text>Register</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default RegisterView
