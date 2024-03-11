"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import {  toast } from 'react-toastify';



const PostForm = () => {
    const router = useRouter()
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [authorName, setAuthorName] = useState('');
    //   const [formdata , setFormdata] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setFormdata([...formdata, {title, content, authorName}])
        try {

            await fetch('/api/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            router.refresh();
            toast.success('Post created successfully');
        } catch (err) {
            console.log(err)
        }


        setTitle('');
        setContent('');
        setAuthorName('');
    };


    return (
        <div>
           

            <div className="max-w-sm mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4 text-black">Create New Post</h2>
                <Link className='text-xl font-bold mb-2 px-3 text-center text-red-500 border-4' href={'/'}>View Post</Link>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-1 text-black">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block mb-1 text-black">Content</label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="authorName" className="block mb-1 text-black">Author Name</label>
                        <input
                            type="text"
                            id="authorName"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                            className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostForm;
