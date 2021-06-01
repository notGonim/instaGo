import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { getSuggestProfiles } from '../services/firebase'

export default function Suggestion({ userId, following }) {

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
                            <p className="font-bold text-gray-base">Suggestion</p>
                        </div>
                    </div>
                ) : (null)

            }
        </>

    )
}
