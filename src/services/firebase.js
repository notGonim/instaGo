import { Profiler } from 'react';
import { firebase, FieldValue } from '../lib/firebase'


export async function doesUsernameExist(username) {
    const res = await firebase.firestore().collection('users').where('username', '==', username).get()
    return res.docs.map((user) => user.data().length > 0)
}


//getting user from the fire store where userId is the same passed from the auth  
export async function getUserByUserId(userId) {
    const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }))
    return user
}


export async function getSuggestProfiles(userId, following) {

    const result = await firebase.firestore().collection('users').limit(2).get();


    //so here to make sure to not get my account to be in the suggestion accounts and also to not get any of my following list into the suggestions
    return result.docs.map((user) => (
        { ...user.data(), docId: user.id }
    )).filter((profile) => profile.userId !== userId && !following.includes(profile.userId))
}


export async function updateLoggedInUserFollowing(
    loggedInUserDoc,  //currently logged in user docId    
    profileId, //the user that logged in user going to follow 
    isFollowingProfile  // true/false (iam  currently follow this person )
) {
    return firebase.firestore().collection('users')
        .doc(loggedInUserDoc) 
        .update({ following: isFollowingProfile ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId) }) //if i am following him then Unfollow else follow   
}



export async function updateFollowedUserFollowers(suggestedProfileDocId, userId) {

    return null

}