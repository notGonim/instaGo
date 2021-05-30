import React, { memo } from 'react'
import useUser from '../hooks/use-user'
import Suggestion from './suggestion'
import User from './user'
const Sidebar = () => {


    const { user: { fullname, userId, username } } = useUser()

    return (
        <div>
            <User username={username} fullname={fullname} />
            <Suggestion userId={userId} />
        </div>

    )
}


export default memo(Sidebar)