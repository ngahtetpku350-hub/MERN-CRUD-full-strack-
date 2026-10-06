import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { postDetail } from '../../api/services/post';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const postsDetail = async () => {
        try {
            setLoading(true);
            const response = await postDetail(id);
            setPost(response.data);
        } catch (error) {
            console.error("Failed to fetch post details:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        postsDetail();
    }, [id]);

    // if (loading) {
    //     return (
    //         <div className="flex justify-center items-center py-20 text-gray-500">
    //             Loading post...
    //         </div>
    //     );
    // }
    if (!post) {
        return (
            <div className="flex flex-col items-center justify-center py-20">
                <p className="text-gray-600 mb-4">Post not found.</p>
                <Link to="/posts" className="text-sm font-semibold text-black underline">
                    ← Back to Posts
                </Link>
            </div>
        );
    }

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
                        {post.category?.name || "Uncategorized"}
                    </span>

                    <div>
                        <h1>{post._id}</h1>
                    </div>

                    <span className="text-sm text-gray-400">
                        {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
                    </span>
                </div>

                {/* Assuming this is the title of the post */}
                <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
                    {post.title}
                </h1>

                <p className="mt-3 text-sm font-medium text-gray-500">
                    By {post.author}
                </p>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                    {post.description}
                </p>
            </header>

            {/* Content */}
            <div className="py-10">
                <div className="text-base leading-8 text-gray-700 whitespace-pre-line">
                    {post.content}
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <Link
                    to="/posts"
                    className="text-sm font-semibold text-gray-600 hover:text-black"
                >
                    ← All Posts
                </Link>
                <div className='flex gap-3'>
                <Link

                to={`/posts/${id}/delete`} 
                className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                    Delete Posts
                </Link>

                <Link
                    to={`/posts/${post._id}`}
                    className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                    Edit Post
                </Link>

                </div>
                
            </div>
        </article>
    );
};

export default PostDetails;