import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { getSuggestProfiles } from '../services/firebase'
import SuggestedProfile from './SuggestedProfile'

export default function Suggestion({ userId, following ,loggedInUserDoc}) {

    const [profiles, setProfiles] = useState(null)

    useEffect(() => {


        async function suggestProfiles() {
            const response = await getSuggestProfiles(userId, following)
            setProfiles(response)
        }
        if (userId)
            suggestProfiles()


    }, [userId])
    return (

        <>
            {
                !profiles ? (
                    <Skeleton count={1} height={150} className="mt-5" />
                ) : profiles.length > 0 ? (
                    <div className="rounded flex flex-col">
                        <div className="text-sm flex items-center align-items justify-between mb-2">
                            <p className="font-bold text-gray-base">Suggestions for you</p>
                        </div>
                        <div className="grid mt-4 gap-5">
                            {profiles.map((profile) => (
                                <SuggestedProfile userId={userId} profileId={profile.userId}
                                    username={profile.username} profileDocid={profile.docId}
                                    loggedInUserDoc={loggedInUserDoc} key={profile.docId} />
                            ))}
                        </div>
                    </div>
                ) : (null)

            }
        </>

    )
}
