"use client"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"
//to auto route at a timeout, we can use useEffect
import { useEffect } from "react"
 
export default function BlogPost() {
    const params = useParams()
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])
    return (    
        <div>
            <h1>Blog Post</h1>
            <p>You are inside {params.slug}</p>
            <button onClick={() => router.push("/")} className="bg-blue-500 text-white p-2 rounded-md">Go to Home</button>
        </div>
    )
}