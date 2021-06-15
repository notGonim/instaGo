import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import usePhotos from '../hooks/use-photos'
import Post from './post'

export default function Timeline() {

    const { photos } = usePhotos()
    return (
        <div className="container col-span-2">
            {
                !photos &&
                (
                    <Skeleton className="mb-5" count={4} width={540} height={350} />
                )
            }
            {
                photos?.length > 0 ?
                    (photos.map((content) =>
                        <Post key={content.docId} docId={content.docId}
                            caption={content.caption}
                            comments={content.comments}
                            dateCreated={content.dateCreated}
                            likes={content.likes} userLikedPhoto={content.userLikedPhoto} username={content.username} src={content.imageSrc} />)
                    ) : (<p className="text-center text-2xl">Follow people to see photos</p>)
            }
        </div>
    )
}
