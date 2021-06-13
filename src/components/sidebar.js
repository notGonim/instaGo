import React, { memo } from 'react'
import useUser from '../hooks/use-user'
import Suggestion from './suggestion'
import User from './user'
const Sidebar = () => {

    const { user: { docId, fullname, userId, username, following } } = useUser()

    return (
        <div>
            <User username={username} fullname={fullname} />
            <Suggestion userId={userId} following={following} loggedInUserDoc={docId} />
        </div>

    )
}


export default memo(Sidebar)