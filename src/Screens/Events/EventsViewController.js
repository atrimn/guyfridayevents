import React, {useEffect, useState} from 'react'
import EventsView from './EventsView'
import {retrieveEvents} from '../../FirebaseUtils/firestoreUtils'
import {useUser} from '../../Context/AppProvider'

const EventsViewController = props => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const userContext = useUser()

  async function retrieveUserEvents(uid) {
    setEvents(await retrieveEvents(uid))
    setLoading(false)
  }

  useEffect(() => {
    console.log(events)
  }, [events])

  useEffect(() => {
    retrieveUserEvents(userContext.user.uid)
  }, [])
  return <EventsView loading={loading} events={events} {...props} />
}

export default EventsViewController
