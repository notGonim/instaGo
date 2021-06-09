import { Link } from "react-router-dom";

export default function Header({ username }) {
    return (
        <div className="flex border-b border-gray-primary h-4 p-4 py-8">
            <div className="flex items-center ">
                <Link className="flex items-center" to={`/p/${username}`} >
                    {username === 'karl' || username === 'dali' || username === 'orwell' || username === 'raphael' || username === 'steve' ?
                        (
                            <img className="rounded-full w-8 flex mr-3"
                                src={`/images/avatars/${username}.jpg`}
                                alt="profile pic " />
                        ) : (
                            <img className="rounded-full w-8 flex mr-3"
                                src={`/images/avatars/default.png`}
                                alt="profile pic " />
                        )
                    }<p className="font-bold">{username}</p>
                </Link>
            </div>
        </div>
    )
}