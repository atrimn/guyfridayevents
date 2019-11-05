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
  List,
  ListItem,
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
  H3,
} from 'native-base'
import {ProfileCard} from '../../Components'

const AdminMenu = ({dummyUser}) => {
  if (dummyUser.admin) {
    return (
      <>
        <ListItem itemDivider>
          <Text>Admin Section</Text>
        </ListItem>
        <ListItem noIndent button>
          <Body>
            <H3>Create Events</H3>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem noIndent button>
          <Body>
            <H3>Completed Events</H3>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem noIndent button>
          <Body>
            <H3>Applicants </H3>
          </Body>
          <Right>
            <Icon active name="arrow-forward" />
          </Right>
        </ListItem>
      </>
    )
  }
  return null
}

const DashboardView = props => {
  const {logOut, dummyUser} = props
  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Left></Left>
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder>
        <ProfileCard />
        <List>
          <ListItem itemDivider>
            <Text>Stay Organized</Text>
          </ListItem>
          <ListItem noIndent button>
            <Body>
              <H3>Events</H3>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem noIndent button>
            <Body>
              <H3>Event invitations</H3>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem noIndent button>
            <Body>
              <H3>Event History</H3>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <AdminMenu {...props} />
        </List>
      </Content>
    </Container>
  )
}

{
  /* <Text>Hello authenticated</Text>
<Button transparent onPress={logOut}>
  <Text>Sign out!</Text>
</Button> */
}

export default DashboardView
