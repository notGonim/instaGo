import React, { useContext, useEffect, useState } from 'react'
import FirebaseContext from '../context/firebase'
import UserContext from '../context/user'

export default function useUser() {


    const [activeUsers, setActiveUsers] = useState({})
    const { user } = useContext(UserContext)

    useEffect(() => {
        //func to get all active users && get the user data based on the ID 
        async function getUserObjByUserId() {

        }

        if (user?.uid) {
            getUserObjByUserId()
        }

    }, [user])

}