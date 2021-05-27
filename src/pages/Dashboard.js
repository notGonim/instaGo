import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Timeline from '../components/timeline'

export default function Dashboard() {

    useEffect(() => {
        document.title = 'InstaGo'
    }, [])

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    )
}