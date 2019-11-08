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
  Card,
  Spinner,
  CardItem,
} from 'native-base'
import moment from 'moment'

const EventsView = props => {
  const {navigation, events, loading} = props
  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => navigation.pop()} transparent>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Events</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder>
        {loading ? <Spinner size="large" color="blue" /> : null}
        {events.map(event => (
          <Card key={event.title}>
            <CardItem header>
              <Text>{event.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>press for more information</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{moment(event.day.toDate()).format('L')}</Text>
            </CardItem>
          </Card>
        ))}
      </Content>
    </Container>
  )
}

export default EventsView
