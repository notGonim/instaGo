import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'





import React from 'react'

export const User = ({ username, fullname }) => {
    return (
        <>
            {
                !username || !fullname ? (
                    <Skeleton count={1} height={61} />
                ) : (
                    <Link to={`/p/${username}`} className='grid grid-cols-4 gap-4 mb-6 items-center ' >
                        <div className="flex items-center justify-between col-span-1">
                            <img
                                className="rounded-full h-8 w-8 flex"
                                src={`images/avatars/karl.jpg`}
                                alt={`${username} profile`}

                            />
                        </div>
                        <div className="col-span-3">
                            <p className="font-bold text-sm">{username}</p>
                            <p className="text-sm">{fullname}</p>
                        </div>
                    </Link>

                )

            }
        </>
    )
}
