import { firebase, FieldValue } from '../lib/firebase'

export async function doesUsernameExist(username) {
    const res = await firebase.firestore().collection('users').where('username', '==', username).get()
    return res.docs.map((user) => user.data().length > 0)
}