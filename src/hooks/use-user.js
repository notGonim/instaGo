import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'
import { getUserByUserId } from '../services/firebase'

export default function useUser() {


    const [activeUsers, setActiveUsers] = useState({})
    const { user } = useContext(UserContext)

    useEffect(() => {
        async function getUserObjByUserId() {
        //func to get all active users && get the user data based on the ID 
            const [respond] = await getUserByUserId(user.uid)
            setActiveUsers(respond)
        }

        if (user?.uid) {
            getUserObjByUserId()
        }

    }, [user])
    return { user: activeUsers }
}

