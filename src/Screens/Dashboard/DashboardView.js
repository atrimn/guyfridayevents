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
  Card,
  CardItem,
  // Form,
  // Item,
  // List,
  ListItem,
  // Input,
  // Label,
  Body,
  // Footer,
  // FooterTab,
  Button,
  Text,
  Left,
  Title,
  Right,
  Icon,
  H3,
} from 'native-base'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  // Button,
} from 'react-native'
import {material, iOSColors, robotoWeights} from 'react-native-typography'
import {Profilepic} from '../../Components'

const {width, height} = Dimensions.get('window')

const NavigationObject = [
  {
    title: 'Events',
    description: 'View all upcoming events',
    screen: 'events',
    icon: require('../../Assets/Calendar.png'),
  },
  {
    title: 'Work Request',
    description: 'View & accept event invitations',
    screen: 'workInvites',
    icon: require('../../Assets/accept.png'),
  },

  {
    title: 'Events Completed',
    description: 'View all events worked',
    screen: 'pastEvents',
    icon: require('../../Assets/past.png'),
  },
]
const AdminNavigationObject = [
  {
    title: 'create Events(admin)',
    description: 'create events',
    screen: 'createEvent',
    icon: require('../../Assets/Calendar.png'),
  },
  {
    title: 'Events(admin)',
    description: 'Invite staff & edit events',
    screen: 'createEvent2',
    icon: require('../../Assets/Calendar.png'),
  },
]

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(242,242,247)',
    maxHeight: 'auto',
    alignItems: 'center',
  },
  imageSection: {
    alignItems: 'center',
    height: height * 0.23,
    // backgroundColor: 'red',
    justifyContent: 'space-around',
    marginBottom: height * 0.02,
  },
  navigationCard: {
    width: '90%',
    padding: width * 0.05,
    // height: height * 0.5,
    borderRadius: 8,
    shadowOpacity: 0.2,
    shadowColor: 'rgba(44,44,46,1)',
  },
  navigationItem: {
    height: width * 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: iOSColors.customGray,
    marginBottom: 20,
  },
})

const NavIcon = ({icon}) => {
  return (
    <Image style={{height: '100%', width: 40, marginRight: 10}} source={icon} />
  )
}

const NavItems = ({navigationHandler, navObject}) => {
  return (
    <>
      {navObject.map(item => (
        <TouchableOpacity
          key={item.screen}
          style={styles.navigationItem}
          onPress={() => navigationHandler(item.screen)}>
          <NavIcon icon={item.icon} />
          <View>
            <Text style={material.body1}>{item.title}</Text>
            <Text style={material.caption}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </>
  )
}

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
  const {logOut, dummyUser, navigationHandler} = props
  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container style={{backgroundColor: 'rgb(242,242,247)'}}>
      <Header>
        <Left>
          <Button
            // title="signout"
            onPress={() => logOut()}
            transparent>
            <Icon style={{color: 'red', fontSize: 24}} name="md-exit" />
          </Button>
        </Left>
        <Body>
          <Title>Dashboard</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder contentContainerStyle={styles.container}>
        <View style={styles.imageSection}>
          <Profilepic />
          <Text
            style={{
              ...material.titleObject,
              fontWeight: '600',
              color: 'rgba(0,0,0,0.7)',
            }}>
            Adrian Lineweaver
          </Text>
        </View>
        <Card style={styles.navigationCard}>
          <NavItems {...props} navObject={NavigationObject}></NavItems>
        </Card>
        <Card style={styles.navigationCard}>
          <CardItem header>
            <Text>Admin Menu</Text>
          </CardItem>
          <NavItems {...props} navObject={AdminNavigationObject}></NavItems>
        </Card>
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
