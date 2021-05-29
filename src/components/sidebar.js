import React from 'react'
import useUser from '../hooks/use-user'
import Suggestion from './suggestion'
import { User } from './user'
export default function Sidebar() {


    const { user: { fullname, userId, username } } = useUser()

    return (
        <div>
            <User username={username} fullname={fullname} />
            <Suggestion userId={userId} />
        </div>

    )
}
