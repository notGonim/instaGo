import React from 'react'
import usePhotos from '../hooks/use-photos'

export default function Timeline(){

    const {photos} =usePhotos()
    return (
        <div className="container col-span-2">
            <h1>header</h1>
        </div>

    )
}
