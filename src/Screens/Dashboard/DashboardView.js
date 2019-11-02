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

const DashboardView = props => {
  const {logOut} = props
  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Register</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder>
        <Text>Hello authenticated</Text>
        <Button transparent onPress={logOut}>
          <Text>Sign out!</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default DashboardView
