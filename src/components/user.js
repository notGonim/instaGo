import { memo } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'





import React from 'react'

 const User = ({ username, fullname }) => {
    return (
        <>
            {
                !username || !fullname ? (
                    <Skeleton count={1} height={61} />
                ) : (
                    <Link to={`/p/${username}`} className='grid grid-cols-4 gap-4 mb-6 items-center ' >
                        <div className="flex items-center justify-between col-span-1">
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
                        }</div>
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

export default memo(User)
//User.whyDidYouRender=true