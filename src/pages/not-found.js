import React, { useEffect } from 'react'
import Header  from '../components/header'

export default function NotFound() {


    useEffect(() => {
        document.title = 'Not Found - InstaGo'
    }, [])

    return (
        <div className=" bg-gray-background">
            <Header />
            <div className="mx-auth max-w-screen-lg">
                <p className="text-center text-2xl">Not Found!</p>
            </div>
        </div>
    )
}


