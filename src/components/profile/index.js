import { useEffect, useReducer } from "react"
import { getUserPhotosByUserId, getUserByUsername } from "../../services/firebase"
import Header from "./header"

export default function Profile({ user }) {

    const reducer = (state, newState) => ({ ...state, ...newState })
    const initialState = {
        profile: {},
        photosCollections: [],
        followerCount: 0
    }
    const [{ profile, photosCollections, followerCount }, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getProfileInfo() {
            const photos = await getUserPhotosByUserId(user.userId)
            dispatch({ profile: user, photosCollections: photos, followerCount: user.followers.length })
        }
        getProfileInfo()
    }, [user.username])


    return (
        <>
            <Header  username={user.username} />
        </>
    )
}