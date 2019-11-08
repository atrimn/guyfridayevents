import firebase from 'react-native-firebase'

const db = firebase.firestore()

/*
  #Authentication Related
  #Util functions
 */
//creates a user inside the users collection in firebase
export async function createUserEntry(user) {
  const {email, uid} = user
  try {
    const response = await db
      .collection('users')
      .doc(uid)
      .set(user)
    // when we recieve response
    return response
  } catch (error) {
    throw error
  }
}

/*
  #Events Related
  #Util functions
 */

// retrieves events accepted by user
export async function retrieveEvents(uid) {
  try {
    const response = await db
      .collection('events')
      .where('acceptedUsers', 'array-contains', uid)
      .get()
    return response.docs.map(doc => doc.data())
  } catch (error) {
    throw error
  }
}

// create event

export async function createEvent(event) {
  try {
    const response = await db
      .collection('events')
      .doc()
      .set({...event, acceptedUsers: []})
    console.log(response)
  } catch (error) {
    throw error
  }
}
