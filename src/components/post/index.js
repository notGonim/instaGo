import { useRef } from "react";
import Actions from "./actions";
import Header from "./header";
import Image from "./image";



export default function Post({ content, src }) {


    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()
    /*
    
                <Actions docId={content.docId} totalLikes={content.likes.length} likedPhoto={content.userLikedPhoto} handleFocus={handleFocus} />
            
    
    */

    return (

        <div className="rounded col-span-4 mb-8 border bg-white  border-gray-primary ">
            <Header username={content.username} />
            <Image src={src} caption={content.caption} />
        </div>
    )


}