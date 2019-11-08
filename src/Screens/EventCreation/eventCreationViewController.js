import React, {useEffect, useState} from 'react'
import EventCreationView from './eventCreationView'
import {retrieveEvents, createEvent} from '../../FirebaseUtils/firestoreUtils'
import {useUser} from '../../Context/AppProvider'
import moment from 'moment'

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
  const [day, setDay] = useState(moment().format('L'))

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
    const event = {
      title: eventName,
      description: notes,
      address,
      day,
      captainTimeIn,
      staffTimeIn,
      kitchenTimeIn,
    }
    try {
      const response = await createEvent(event)
    } catch (error) {
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
        setCaptainTimeIn(timeIn)
        break
      case 'kitchen':
        console.log('kitchen')
        setKitchenTimeIn(timeIn)
        break
      case 'waiter':
        console.log('waiter')
        setStaffTimeIn(timeIn)
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
