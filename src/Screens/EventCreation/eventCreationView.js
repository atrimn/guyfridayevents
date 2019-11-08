/*
  - fooView.js Files are just responsible for displaying the UI
  - all functionality lives inside fooViewController.js Files.
  - stick to this structure!!
*/
import React, {useEffect} from 'react'
import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native'
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
  Textarea,
  List,
  ListItem,
} from 'native-base'
import moment from 'moment'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import {Appearance} from 'react-native-appearance'
import {iOSColors} from 'react-native-typography'
// import {createEvent} from '../../FirebaseUtils/firestoreUtils'
const colorScheme = Appearance.getColorScheme()

const exitAlert = navigation => {
  Alert.alert(
    'Exit screen?',
    'event will be lost',
    [
      {text: 'Yes', onPress: () => navigation.pop()},
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  )
}

const EventCreationView = props => {
  const {
    navigation,
    handleConfirmDate,
    handleConfirmTime,
    hideDatePicker,
    showDatePicker,
    showTimePicker,
    hideTimePicker,
    isDatePickerVisible,
    isTimePickerVisible,
    eventName,
    address,
    notes,
    day,
    setDay,
    kitchenTimeIn,
    captainTimeIn,
    staffTimeIn,
    setEventName,
    setAddress,
    setNotes,
    setKitchenTimeIn,
    setCaptainTimeIn,
    setStaffTimeIn,
    handleCreateEvent,
  } = props
  useEffect(() => {
    console.log(props)
    // toggleTabsHandler('login')
  }, [])

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress={() => exitAlert(navigation)} transparent>
            <Icon style={{color: 'red'}} name="ios-close" />
          </Button>
        </Left>
        <Body>
          <Title>Create event</Title>
        </Body>
        <Right></Right>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel last>
            <Label>Event Name</Label>
            <Input value={eventName} onChangeText={setEventName} />
          </Item>
          <Item style={{marginBottom: 20}} floatingLabel last>
            <Label>Address</Label>
            <Input value={address} onChangeText={setAddress} />
          </Item>
          <Textarea
            value={notes}
            onChangeText={setNotes}
            rowSpan={5}
            bordered
            placeholder="additional information"
          />
        </Form>
        <Text style={{marginTop: 20}}>Select Date</Text>
        <TouchableOpacity
          onPress={showDatePicker}
          style={{marginBottom: 20, backgroundColor: iOSColors.customGray}}>
          <View
            style={{
              position: 'absolute',
              ...StyleSheet.absoluteFillObject,
              zIndex: 100,
            }}
          />
          <Input placeholder={moment(day).format('L')} disabled></Input>
        </TouchableOpacity>
        <DateTimePickerModal
          isDarkModeEnabled={colorScheme === 'dark'}
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isDarkModeEnabled={colorScheme === 'dark'}
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleConfirmTime}
          onCancel={hideTimePicker}
        />
        <List>
          <ListItem itemDivider first>
            <Text>Captain time in</Text>
          </ListItem>
          <ListItem noIndent>
            <Button onPress={() => showTimePicker('captain')} transparent>
              {captainTimeIn ? (
                <Text>{moment(captainTimeIn).format('h:mm a')}</Text>
              ) : (
                <Text>Captain start time</Text>
              )}
            </Button>
          </ListItem>
          <ListItem itemDivider first>
            <Text>Kitchen time in</Text>
          </ListItem>
          <ListItem noIndent>
            <Button onPress={() => showTimePicker('kitchen')} transparent>
              {kitchenTimeIn ? (
                <Text>{moment(kitchenTimeIn).format('h:mm a')}</Text>
              ) : (
                <Text>kitchen start time</Text>
              )}
            </Button>
          </ListItem>
          <ListItem itemDivider first>
            <Text>Waiter time in</Text>
          </ListItem>
          <ListItem noIndent>
            <Button onPress={() => showTimePicker('waiter')} transparent>
              {staffTimeIn ? (
                <Text>{moment(staffTimeIn).format('h:mm a')}</Text>
              ) : (
                <Text>waiter start time</Text>
              )}
            </Button>
          </ListItem>
        </List>
        <Button
          onPress={handleCreateEvent}
          small
          style={{justifyContent: 'center', marginTop: 20}}>
          <Text>Create Event</Text>
        </Button>
      </Content>
    </Container>
  )
}

export default EventCreationView
