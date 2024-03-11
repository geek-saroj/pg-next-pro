'use client'
import { useRouter } from "next/navigation"
import { toast } from 'react-toastify';


export default function DeletePostButton({postId}){
    const router = useRouter()

    async function handleClick(){
        
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })

            router.refresh()
            toast.error('Post deleted successfully')
        } catch(e){
            console.error(e)
        }
       
    }

    return (
        <button className="text-red-500" onClick={handleClick}>Delete Post</button>
    )
}