import { useRef } from "react";
import Actions from "./actions";
import Header from "./header";
import Image from "./image";



export default function Post({ username, docId, likes, userLikedPhoto, src, caption }) {


    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()
    /*

                      

    
    */

    return (

        <div className="rounded col-span-4 mb-8 border bg-white  border-gray-primary ">
            <Header username={username} />
            <Image src={src} caption={caption} />
            <Actions docId={docId} totalLikes={likes.length} likedPhoto={userLikedPhoto} handleFocus={handleFocus} />
        </div>
    )


}