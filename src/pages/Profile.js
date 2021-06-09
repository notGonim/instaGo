import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import { getUserByUsername } from "../services/firebase"
import * as ROUTES from '../constants/routes'
import Header from '../components/header'
export default function Profile() {

    const { username } = useParams()
    const [user, setUser] = useState(null)
    const [userExists, setUserExists] = useState(false)
    const history = useHistory()

    useEffect(() => {
        async function checkUserExists() {
            const user = await getUserByUsername(username)
            if (user.length > 0) {
                setUser(user[0])
                setUserExists(true)
            } else {
                history.pushState(ROUTES.NOT_FOUND)
            }
        }
        checkUserExists()
    }, [username, history])


    return (
        <>

            {userExists ? (
                <div className="bg-gray-background">
                    <Header />
                    <div className="mx-auto max-w-screen-lg">

                    </div>
                </div>
            ) : null}
        </>
    )
}