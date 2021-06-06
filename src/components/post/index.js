import Header from "./header";



export default function Post({ content }) {



    return (

        <div className="rounded col-span-4 border bg-white  border-gray-primary ">
            <Header username={content.username} />
        </div>
    )


}