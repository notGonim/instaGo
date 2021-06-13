import { func } from 'prop-types';
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
    }));
    return user;
}


export async function getSuggestProfiles(userId, following) {

    const result = await firebase.firestore().collection('users').limit(5).get();

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
        .update({
            following
                : isFollowingProfile ? FieldValue.arrayRemove(profileId) : FieldValue.arrayUnion(profileId)
        }) //if i am following him then Un-follow else follow   
}



export async function updateFollowedUserFollowers(
    profileDocid,  //currently logged in user docId    
    suggestedProfileDocId, //the user that logged in user going to follow 
    isFollowingProfile  // true/false (iam  currently follow this person )
) {
    return firebase.firestore().collection('users')
        .doc(profileDocid)
        .update({
            followers
                : isFollowingProfile ? FieldValue.arrayRemove(suggestedProfileDocId) : FieldValue.arrayUnion(suggestedProfileDocId)
        }) //if i am following him then Unfollow else follow   
}


// this func is to get photos of the users that active user follow
export async function getPhotos(userId, following) {
    // [5,4,2] => following
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', 'in', following)
        .get();

    const userFollowedPhotos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));

    const photosWithUserDetails = await Promise.all(
        userFollowedPhotos.map(async (photo) => {
            let userLikedPhoto = false;
            if (photo.likes.includes(userId)) {
                userLikedPhoto = true;
            }
            // photo.userId = 2
            const user = await getUserByUserId(photo.userId);
            // raphael
            const { username } = user[0];
            return { username, ...photo, userLikedPhoto };
        })
    );
    return photosWithUserDetails;
}

export async function getUserByUsername(username) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', username)
        .get();
    return result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));
}
export async function isUserFollowingProfile(loggedInUserUsername, profileUserId) {
    const result = await firebase
        .firestore()
        .collection('users')
        .where('username', '==', loggedInUserUsername) // gonim12 (active logged in user)
        .where('following', 'array-contains', profileUserId)
        .get();

    const [response = {}] = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return response.userId;
}
export async function getUserPhotosByUserId(userId) {
    const result = await firebase
        .firestore()
        .collection('photos')
        .where('userId', '==', userId)
        .get();

    const photos = result.docs.map((photo) => ({
        ...photo.data(),
        docId: photo.id
    }));
    return photos;
}

export async function toggleFollow(
    isFollowingProfile,
    activeUserDocId,
    profileDocId,
    profileUserId,
    followingUserId
) {
    await updateLoggedInUserFollowing(activeUserDocId, profileUserId, isFollowingProfile);
    await updateFollowedUserFollowers(profileDocId, followingUserId, isFollowingProfile);
}