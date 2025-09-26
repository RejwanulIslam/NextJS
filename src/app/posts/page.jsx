import Link from "next/link"

export const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
}
export default async function Posts() {
    const posts = await getPosts()
    return (
        <div className="grid grid-cols-4 gap-5">
            {
                posts.map(singledata =>
                    <div key={singledata.id} >
                        <p>{singledata.title}</p>
                        <Link className="btn bg-amber-200" href={`/posts/${singledata.id}`}>Detels</Link>
                    </div>
                )
            }
        </div>
    )
}
