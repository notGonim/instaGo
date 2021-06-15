import { useRef } from "react";
import Actions from "./actions";
import Footer from "./footer";
import Header from "./header";
import Image from "./image";
import Comments from '../post/comment'


export default function Post({ username, dateCreated, docId, likes, comments, userLikedPhoto, src, caption }) {


    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()
    return (

        <div className="rounded col-span-4 mb-8 border bg-white  border-gray-primary ">
            <Header username={username} />
            <Image src={src} caption={caption} />
            <Actions docId={docId} totalLikes={likes.length} likedPhoto={userLikedPhoto} handleFocus={handleFocus} />
            <Footer caption={caption} username={username} />
            <Comments docId={docId} posted={dateCreated} commentInput={commentInput}  comments={comments} />
        </div>
    )


}


