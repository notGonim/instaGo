
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { updateFollowedUserFollowers, updateLoggedInUserFollowing } from '../services/firebase'


export default function SuggestedProfile({ userId, profileId, username, suggestedProfileDocId, loggedInUserDoc }) {

    const [followed, setFollowed] = useState(false)

    const handleFollowUser = async () => {
        setFollowed(true)

        //To update the following list of the loggedin user 
        await updateLoggedInUserFollowing(loggedInUserDoc, profileId, false)
        //To update the follower list of the user that loggedin user followed
        await updateFollowedUserFollowers(suggestedProfileDocId, userId)
    }

    return (
        <>
            {!followed && (
                <div className="flex flex-row items-center align-items justify-between ">
                    <div className="flex items-center justify-between ">


                        {username === 'karl' || username === 'dali' || username === 'orwell' || username === 'raphael' || username === 'steve' ?
                            (
                                <img className="rounded-full w-8 flex mr-3"
                                src={`/images/avatars/${username}.jpg`}
                                alt="profile pic " />
                            ) : (
                                <img className="rounded-full w-8 flex mr-3"
                                    src={`/images/avatars/default.png`}
                                    alt="profile pic " />
                            )
                        }<Link to={`/p/${username}`} >
                            <p className="font-bold text-sm">{username}</p>
                        </Link>
                    </div>
                    <div className="">
                        <button className="text-xs font-bold text-blue-400" onClick={handleFollowUser} >Follow</button>
                    </div>
                </div>
            )}

        </>
    )
}