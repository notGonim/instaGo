import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Suggestion({ userId }) {

    const [profiles, setProfiles] = useState(null)

    useEffect(() => {

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
