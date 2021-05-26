import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import FirebaseContext from '../context/firebase'

export default function Login() {

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || email === ''


    const handleLogin = () => {

    }

    useEffect(() => {
        document.title = 'Login - InstaGo'
    }, [])

    return (
        <div className="border-2">
            <p>Iam in the login page</p>
        </div>
    )

}