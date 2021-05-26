import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'



export default function Login() {

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState('')

    const isInvalid = password === '' || email === ''


    const handleLogin = async(e) => {
        e.preventDefault()
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            history.push(ROUTES.DASHBOARD)
        } catch (err) {
            setEmail('')
            setPassword('')
            setError(err.message)
        }
    }

    useEffect(() => {
        document.title = 'Login - InstaGo'
    }, [])

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="instaGo profile pic " className="max-w-full" />
            </div>
            <div className="flex flex-col w-2/5">
                <div className="flex flex-col items-center bg-white p-4 border rounded border-gray-primary mb-4 ">
                    <h1 className="flex justify-center w-full">
                        <img src="images/logo.png" alt="instaGo" className="mt-2 w-6/12 mb-4" />
                    </h1>
                    {err && <p className="mb-4 text-xs text-red-500">{err}</p>}
                    <form onSubmit={handleLogin} method="POST">
                        <input type="email" placeholder="Email Address" aria-label="Enter your email"
                            onChange={({ target }) => setEmail(target.value)}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            onChange={({ target }) => setPassword(target.value)}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <button type="submit" disabled={isInvalid} className={`bg-blue-500 w-full rounded h-8 font-bold  text-white  ${isInvalid && 'opacity-50'}`}>Login</button>

                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 border border-gray-primary ">
                    <p className="text-sm">Don`t have an account? {''}
                        <Link to='/signup' className="font-bold text-blue-500 ">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    )

}