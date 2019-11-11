import React, {useEffect, useState} from 'react'
import EventCreationView from './eventCreationView'
import {retrieveEvents, createEvent} from '../../FirebaseUtils/firestoreUtils'
import {useUser} from '../../Context/AppProvider'
import moment from 'moment'
import {Alert} from 'react-native'
import {Toast} from 'native-base'

const errowAlert = error => {
  Alert.alert(
    'error',
    error,
    [
      {
        text: 'Ok',
      },
    ],
    {cancelable: false},
  )
}

const EventCreationViewController = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
  const [eventName, setEventName] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  // might add more or make this dynamic
  const [selected, setSelected] = useState('')
  const [kitchenTimeIn, setKitchenTimeIn] = useState('')
  const [captainTimeIn, setCaptainTimeIn] = useState('')
  const [staffTimeIn, setStaffTimeIn] = useState('')
  const [day, setDay] = useState(moment().toDate())

  const userContext = useUser()

  useEffect(() => {
    console.log(selected)
  }, [selected])

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const showTimePicker = selected => {
    setSelected(selected)
    setTimePickerVisibility(true)
  }

  const hideTimePicker = () => {
    setTimePickerVisibility(false)
  }

  const handleConfirmDate = date => {
    console.log(date)
    // console.log('A date has been picked: ', moment(date).format('h:mm a'))
    setDay(date)
    hideDatePicker()
  }

  const handleCreateEvent = async () => {
    try {
      const event = {
        title: eventName,
        description: notes,
        address,
        day,
        captainTimeIn,
        staffTimeIn,
        kitchenTimeIn,
      }
      if (eventName === '') throw 'Please name this event'
      if (address === '') throw 'Please supply an address for this event'
      // if any of the time ins aren't set throw error!
      if (kitchenTimeIn === '' || captainTimeIn === '' || staffTimeIn === '')
        throw 'Set a time in for all groups'
      const response = await createEvent(event)
      Toast.show({
        text: 'Event Created!',
        buttonText: 'Okay',
        type: 'success',
      })
      props.navigation.pop()
      console.log(response)
    } catch (error) {
      errowAlert(error)
      console.log(error)
    }
  }

  const handleConfirmTime = date => {
    const time = moment(date).format('h:mm a')
    const dateString = moment(day).format('L')
    const timeIn = moment(dateString + ' ' + time).toDate()
    console.log(moment(timeIn).format('h:mm a'))
    switch (selected) {
      case 'captain':
        console.log('captain')
        if (staffTimeIn === '' && kitchenTimeIn === '') {
          setKitchenTimeIn(timeIn)
          setStaffTimeIn(timeIn)
        }
        setCaptainTimeIn(timeIn)
        setTimePickerVisibility()
        break
      case 'kitchen':
        console.log('kitchen')
        setKitchenTimeIn(timeIn)
        setTimePickerVisibility()
        break
      case 'waiter':
        console.log('waiter')
        setStaffTimeIn(timeIn)
        setTimePickerVisibility()
        break
    }
    hideDatePicker()
  }

  // async function retrieveUserEvents(uid) {
  //   setEvents(await retrieveEvents(uid))
  //   setLoading(false)
  // }

  useEffect(() => {
    // retrieveUserEvents(userContext.user.uid)
  }, [])

  return (
    <EventCreationView
      isDatePickerVisible={isDatePickerVisible}
      isTimePickerVisible={isTimePickerVisible}
      showDatePicker={showDatePicker}
      hideDatePicker={hideDatePicker}
      showTimePicker={showTimePicker}
      hideTimePicker={hideTimePicker}
      handleConfirmTime={handleConfirmTime}
      handleConfirmDate={handleConfirmDate}
      eventName={eventName}
      address={address}
      notes={notes}
      kitchenTimeIn={kitchenTimeIn}
      captainTimeIn={captainTimeIn}
      staffTimeIn={staffTimeIn}
      setEventName={setEventName}
      setAddress={setAddress}
      setNotes={setNotes}
      setKitchenTimeIn={setKitchenTimeIn}
      setCaptainTimeIn={setCaptainTimeIn}
      setStaffTimeIn={setStaffTimeIn}
      day={day}
      setDay={setDay}
      handleCreateEvent={handleCreateEvent}
      {...props}
    />
  )
}

export default EventCreationViewController
