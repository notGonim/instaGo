import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/user'
import { getPhotos, getUserByUserId } from '../services/firebase'


/**
 *  usePhoto hook 
*/
export default function usePhotos() {

    const [photos, setPhotos] = useState(null)

    //it should be const { user :{uid:userId='}}
    const { user: { uid: userId = '' } } = useContext(UserContext)


    useEffect(() => {

        async function getTimelinePhotos() {

            //getUserByUserId func is used to get the user 
            const [user] = await getUserByUserId(userId)
            const following = user.following
            console.log(following)
            let followedUserPhotos = []

            //To check if the user is actually follow other people ? on the platform  
            if (following.length > 0) {
                followedUserPhotos = await getPhotos(userId, following)  // this func is to get photos of the users that active user follow 
            }

            await followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
            setPhotos(followedUserPhotos)
        }

        getTimelinePhotos()

    }, [userId,photos])


    return { photos }

}