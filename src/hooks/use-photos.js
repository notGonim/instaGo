import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/user'
import { getPhotos, getUserByUserId } from '../services/firebase'



export default function usePhotos() {

    const [photos, setPhotos] = useState(null)
    const { user: { uid: userId = '' } } = useContext(UserContext)


    useEffect(() => {

        async function getTimelinePhotos() {
            const { following } = await getUserByUserId(userId)
            let followedUserPhotos = []
            //To check if the user is actually follow other people ? on the platform  
            if (following.length > 0) {
                followedUserPhotos = await getPhotos(userId, following)  // this func is to get photos of the users that active user follow 
            }
        }

        getTimelinePhotos()
    }, [])
    return { photos }


}