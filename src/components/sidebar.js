import React from 'react'
import useUser from '../hooks/use-user'
import Suggestion from './suggestion'
import User from './user'

export default function Sidebar() {


    const { user: { fullName, username, userId } } = useUser()
    return (
        <div>
            <User />
            <Suggestion />
        </div>

    )
}
