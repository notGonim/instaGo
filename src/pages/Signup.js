import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes'



export default function Signup() {

    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [password, setPassword] = useState('')
    const [err, setError] = useState('')

    const isInvalid =username===''||fullname===''|| password === '' || email === ''


    const handleSignup = async (e) => {
        e.preventDefault()
        try {

        } catch (err) {

        }
    }

    useEffect(() => {
        document.title = 'Sign Up - InstaGo'
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
                    <form onSubmit={handleSignup} method="POST">
                        <input type="text" placeholder="Your Username" aria-label="Enter your Username"
                            onChange={({ target }) => setUsername(target.value)} value={username}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input type="text" placeholder="Your Full Name" aria-label="Enter your Full Name"
                            onChange={({ target }) => setFullname(target.value)} value={fullname}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input type="email" placeholder="Email Address" aria-label="Enter your email"
                            onChange={({ target }) => setEmail(target.value)} value={email}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <input type="password" placeholder="Your Password" aria-label="Enter your password"
                            onChange={({ target }) => setPassword(target.value)} value={password}
                            className="text-sm text-gray-base w-full py-5 px-4 h-2 border border-gray-primary rounded mb-2" />
                        <button type="submit" disabled={isInvalid} className={`bg-blue-500 w-full rounded h-8 font-bold  text-white  ${isInvalid && 'opacity-50'}`}>Sign Up</button>

                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white rounded p-4 border border-gray-primary ">
                    <p className="text-sm">have an account? {' '}
                        <Link to={ROUTES.LOGIN} className="font-bold text-blue-500 ">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )

}