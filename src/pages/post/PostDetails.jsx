import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { postDetail } from '../../api/services/post';

const PostDetails = () => {
    // const [postdetail, setPost] = ()=>{}
    //     const getposts = async ()=>{
    //         const getpostdata = await postDetail()
    //         console.log(getpostdata)
    //         setPost(getpostdata.data)
    //     }

    return (
        <article className="mx-auto max-w-4xl px-6 py-12">
            {/* Back */}
            <Link
                to="/posts"
                className="text-sm font-medium text-gray-500 transition hover:text-black"
            >
                ← Back to Posts
            </Link>

            {/* Header */}
            <header className="mt-8 border-b border-gray-200 pb-8">
                <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                        Technology
                    </span>

                    <span className="text-sm text-gray-400">
                        September 15, 2026
                    </span>
                </div>

                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                    Getting Started with MERN Stack
                </h1>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                    Learn how MongoDB, Express, React and Node.js work
                    together to build modern web applications.
                </p>
            </header>

            {/* Content */}
            <div className="py-10">
                <p className="text-base leading-8 text-gray-700">
                    
                </p>

                <p className="mt-6 text-base leading-8 text-gray-700">
                    MongoDB handles data storage, Express provides the
                    backend API layer, React handles the user interface,
                    and Node.js provides the runtime for the backend.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-gray-950">
                    MongoDB
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-700">
                    MongoDB is a document-oriented database that stores
                    data in flexible JSON-like documents.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-gray-950">
                    Express and Node.js
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-700">
                    Express makes it easier to build HTTP APIs while
                    Node.js provides the runtime environment for
                    running JavaScript on the server.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-gray-950">
                    React
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-700">
                    React is responsible for building the interactive
                    user interface of the application.
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <Link
                    to="/posts"
                    className="text-sm font-semibold text-gray-600 hover:text-black"
                >
                    ← All Posts
                </Link>

                <Link
                    to="/posts/1/edit"
                    className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                    Edit Post
                </Link>
            </div>
        </article>
    );
}

export default PostDetails
